const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const TABLE_NAME = 'lotto_draws';

function sendJson(res, statusCode, payload) {
  res.status(statusCode).json(payload);
}

function hasConfig() {
  return Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
}

async function supabaseRequest(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const message = Array.isArray(data) ? JSON.stringify(data) : data?.message || text || 'Supabase request failed';
    throw new Error(message);
  }

  return data;
}

module.exports = async (req, res) => {
  if (!hasConfig()) {
    return sendJson(res, 500, {
      error: 'Missing Supabase env vars',
      required: ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'],
    });
  }

  try {
    if (req.method === 'GET') {
      const rows = await supabaseRequest(`/rest/v1/${TABLE_NAME}?select=id,numbers,created_at&order=created_at.desc&limit=10`, {
        method: 'GET',
      });
      return sendJson(res, 200, rows || []);
    }

    if (req.method === 'POST') {
      const numbers = req.body?.numbers;

      if (!Array.isArray(numbers) || numbers.length !== 6 || !numbers.every((value) => Number.isInteger(value) && value >= 1 && value <= 45)) {
        return sendJson(res, 400, {
          error: 'numbers must be an array of 6 integers between 1 and 45',
        });
      }

      const rows = await supabaseRequest(`/rest/v1/${TABLE_NAME}`, {
        method: 'POST',
        headers: {
          Prefer: 'return=representation',
        },
        body: JSON.stringify({
          numbers,
        }),
      });

      return sendJson(res, 200, rows?.[0] || null);
    }

    if (req.method === 'DELETE') {
      await supabaseRequest(`/rest/v1/${TABLE_NAME}?id=gte.0`, {
        method: 'DELETE',
        headers: {
          Prefer: 'return=minimal',
        },
      });

      return sendJson(res, 200, { ok: true });
    }

    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    return sendJson(res, 405, {
      error: 'Method not allowed',
    });
  } catch (error) {
    return sendJson(res, 500, {
      error: error.message || 'Unexpected error',
    });
  }
};

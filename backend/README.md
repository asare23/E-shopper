# Deploying the API to Render

The repository includes a root-level `render.yaml` Blueprint for this Express
API.

1. In Render, choose **New +** → **Blueprint** and connect this repository.
2. Confirm the `eshopper-api` web service from `render.yaml`.
3. Enter `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, and `JWT_SECRET` when prompted.
   Use the Supabase project URL and service-role key from the Supabase project
   settings. Keep the service-role key private; add it only to Render, never to
   Vercel or frontend environment files.
4. Deploy. Verify the service by opening `https://<your-render-service>.onrender.com/health`;
   it should return `{"status":"ok"}`.
5. In the Vercel frontend project's environment variables, set
   `REACT_APP_API_URL` to the Render service's base URL, with no trailing slash
   or `/api`, then redeploy the frontend.

The frontend also needs `REACT_APP_SUPABASE_URL` and
`REACT_APP_SUPABASE_ANON_KEY` in Vercel for its direct Supabase auth and storage
features. The anon key is intended for frontend use; protect database rows with
appropriate Supabase Row Level Security policies.

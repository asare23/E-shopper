# Shopper Admin (React + Vite + Supabase)

    npm install
    npm run dev

1. Configure Supabase Auth email/password sign-in. The login page supports account registration; with email confirmations enabled, new users must confirm before signing in.
2. Create a public Storage bucket named `products` (or change VITE_STORAGE_BUCKET in .env).
3. Turn on RLS for the product tables: public read, authenticated write. Restrict who can register or add server-enforced admin authorization before deployment: this app currently treats every authenticated user as an admin, and client-side signup is not an admin-role check.
4. Do not commit `.env`. Build with `npm run build` and deploy the `dist` folder.

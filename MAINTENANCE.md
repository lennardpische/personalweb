# Maintenance Mode

The site can be put into maintenance mode so all traffic is redirected to a simple "Under Maintenance" page.

## How it works

- **Middleware** (`middleware.ts`) runs on each request. It checks the `MAINTENANCE_MODE` environment variable and, if set, redirects to `/maintenance`.
- **Maintenance page** is at `/maintenance` (plain "Under Maintenance" message and contact link).

## Toggling maintenance

Set the environment variable in your Vercel project (or in `.env.local` for local):

- **On:** `MAINTENANCE_MODE=1` or `MAINTENANCE_MODE=true`
- **Off:** unset the variable, or set `MAINTENANCE_MODE=0`

In Vercel: **Project** → **Settings** → **Environment Variables** → add `MAINTENANCE_MODE` with value `1` for maintenance. Remove it or set to `0` to bring the site back. Changing env vars in Vercel usually requires a redeploy to take effect.

## Local testing

In `.env.local`:

```bash
MAINTENANCE_MODE=1
```

Run the app and visit any route; you should be redirected to `/maintenance`. Remove the variable or set `MAINTENANCE_MODE=0` to turn maintenance off.

## Optional: bypass

To allow a secret query param to skip maintenance (e.g. for you to preview the live site), you can extend `middleware.ts` to check `request.nextUrl.searchParams.get('bypass')` and call `NextResponse.next()` when it matches a secret value.

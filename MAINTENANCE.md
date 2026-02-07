# Maintenance Mode

The site can be put into maintenance mode so all traffic is redirected to a simple "Under Maintenance" page.

## How it works

- **Middleware** (`middleware.ts`) runs on each request. It checks `NEXT_PUBLIC_MAINTENANCE_MODE` (or `MAINTENANCE_MODE`) and, if set, redirects to `/maintenance`. On Vercel’s Edge you must use **`NEXT_PUBLIC_MAINTENANCE_MODE`** so the variable is available in middleware.
- **Maintenance page** is at `/maintenance` (plain "Under Maintenance" message and contact link).

## Toggling maintenance

Set the environment variable in your Vercel project (or in `.env.local` for local):

- **On:** `NEXT_PUBLIC_MAINTENANCE_MODE=1` or `=true`
- **Off:** unset the variable, or set `NEXT_PUBLIC_MAINTENANCE_MODE=0`

In Vercel: **Project** → **Settings** → **Environment Variables** → add **`NEXT_PUBLIC_MAINTENANCE_MODE`** with value **`1`** for Production. Then **redeploy**. To bring the site back, set it to `0` or delete it and redeploy.

## Local testing

In `.env.local`:

```bash
NEXT_PUBLIC_MAINTENANCE_MODE=1
```

Run the app and visit any route; you should be redirected to `/maintenance`. Remove the variable or set `NEXT_PUBLIC_MAINTENANCE_MODE=0` to turn maintenance off.

## Optional: bypass

To allow a secret query param to skip maintenance (e.g. for you to preview the live site), you can extend `middleware.ts` to check `request.nextUrl.searchParams.get('bypass')` and call `NextResponse.next()` when it matches a secret value.

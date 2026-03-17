# ANACHRONOPE — Temporal Field Device

A fictional time-traveler's field instrument. Displays a manifest of historic events to witness, each with a live countdown, what3words navigation coordinate, and temporal importance designation.

---

## Deployment (GitHub Pages)

1. Create a new GitHub repository (public)
2. Push these files to the `main` branch:
   - `index.html`
   - `data.js`
   - `README.md`
3. In the repository → **Settings** → **Pages** → set Source to `main` branch, `/ (root)` folder → **Save**
4. GitHub will publish at `https://<your-username>.github.io/<repo-name>/`

No build step. No dependencies. No server required.

---

## Updating Event Data

Edit `data.js` directly. The device auto-reloads when `refresh_at_iso` is in the past and the device hasn't seen that timestamp.

**Push cycle:**
1. Update `EVENTS` array in `data.js`
2. Set `ANACHRONOPE_CONFIG.refresh_at_iso` to a future timestamp (within minutes)
3. Commit and push to GitHub
4. Active devices will reload automatically within 60 seconds of the refresh timestamp passing

---

## data.js Schema

### ANACHRONOPE_CONFIG

| Field | Type | Description |
|-------|------|-------------|
| `refresh_at_iso` | ISO 8601 string | When devices should auto-reload to fetch new data |
| `version` | string | Displayed on device UI |

### EVENTS array — per-event fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✓ | Unique identifier, e.g. `"evt-001"` |
| `label` | string | ✓ | Brief display name shown on card |
| `description` | string | ✓ | 1–2 sentence flavor text shown in detail view |
| `importance` | `"A"` \| `"B"` \| `"C"` | ✓ | A = Mandatory, B = Subplot, C = Footnote |
| `datetime_iso` | ISO 8601 string | ✓ | Event datetime — used for countdown + timespace generation |
| `w3w` | string | ✓ | what3words address, e.g. `"stealthy.rarely.wicked"` |
| `timespace` | string | display only | Pre-computed timespace string. **Must stay in sync with datetime_iso + w3w.** If you update either of those fields, regenerate this: `T///S:0YYYY.MM.DD.HH.MM///word.word.word` |

### Timespace Coordinate Format

```
T///S:02026.09.17.18.35///stealthy.rarely.wicked
      ^^^^^                 year zero-padded to 5 digits
            ^^              month 2-digit zero-padded
               ^^           day 2-digit zero-padded
                  ^^        hour 24h 2-digit zero-padded
                     ^^     minute 2-digit zero-padded
                        ^^^ what3words address
```

The app generates timespace strings at runtime from `datetime_iso` + `w3w` — the stored `timespace` field is for display reference only. If they diverge, the displayed coordinate will be the computed one.

---

## Filter Tabs

| Tab | Shows |
|-----|-------|
| ALL | All events |
| A+B | Importance A and B only |
| A ONLY | Importance A only |

---

## Auto-Refresh Testing

To test the refresh mechanism: set `refresh_at_iso` to ~2 minutes from now, save, reload the page manually once. The auto-reload will fire when the timestamp passes (checked every 60s). Verify by opening DevTools → Application → Local Storage and confirming `last_refresh` is set.
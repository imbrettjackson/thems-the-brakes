// ANACHRONOPE — Temporal Field Device
// Data Store v1.0.0
// WARNING: timespace field is pre-computed for display convenience.
// If you update datetime_iso or w3w, you MUST regenerate timespace to stay in sync.
// Format: T///S:0YYYY.MM.DD.HH.MM///word.word.word

const ANACHRONOPE_CONFIG = {
  refresh_at_iso: "2026-09-16T08:00:00",
  version: "1.0.0"
};

const EVENTS = [
  {
    id: "evt-001",
    label: "The Convergence at Samarkand",
    description: "A gathering unrepeated in recorded history: seven sovereign cartographers arrive simultaneously at the Blue Dome to present competing maps of a territory that should not exist. What is exchanged here reshapes the next four centuries of exploration.",
    importance: "A",
    datetime_iso: "2026-09-17T18:35:00",
    w3w: "stealthy.rarely.wicked",
    timespace: "T///S:02026.09.17.18.35///stealthy.rarely.wicked"
  },
  {
    id: "evt-002",
    label: "The Whispering Compact of Bruges",
    description: "A clandestine agreement signed between a Flemish merchant guild and an unnamed delegation from the east — the document that quietly ends one empire and seeds another. The original is burned immediately after signing.",
    importance: "B",
    datetime_iso: "2026-09-19T03:12:00",
    w3w: "limit.sharp.echo",
    timespace: "T///S:02026.09.19.03.12///limit.sharp.echo"
  },
  {
    id: "evt-003",
    label: "The Tide Reversal at Cape Vellum",
    description: "A coastal anomaly observed by exactly eleven witnesses, each of whom later publishes a contradictory account. The physical event lasts forty seconds. Its epistemic aftershock lasts two hundred years.",
    importance: "B",
    datetime_iso: "2026-09-22T14:47:00",
    w3w: "vanish.copper.fable",
    timespace: "T///S:02026.09.22.14.47///vanish.copper.fable"
  },
  {
    id: "evt-004",
    label: "Last Entry in the Codex of Errant Stars",
    description: "An anonymous scribe adds the final notation to a manuscript that has passed through forty hands across three continents. The notation is seven words. It changes the meaning of everything preceding it.",
    importance: "C",
    datetime_iso: "2026-09-28T09:00:00",
    w3w: "fading.amber.glyph",
    timespace: "T///S:02026.09.28.09.00///fading.amber.glyph"
  }
];
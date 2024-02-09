
const platform = "pc"
const language = "?language=fr"
const base = `https://api.warframestat.us/${platform}/`

export const URL = {
  archonHunt: `${base}archonHunt${language}`,
  sortie: `${base}sortie${language}`,
  fissures: `${base}fissures${language}`,
  syndicats: `${base}syndicateMissions${language}`,
}

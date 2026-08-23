const SUPABASE_URL = "https://wcznshhziuvqawdhqxpk.supabase.co";
const SUPABASE_KEY = "sb_publishable_G2wPyPyfJhbGL27PKxDrFg_gC7jLnwY";
const escapeHtml=(value="")=>String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
function formatDate(value){if(!value)return "";const date=new Date(value+"T12:00:00");return new Intl.DateTimeFormat("fr-FR",{day:"numeric",month:"long",year:"numeric"}).format(date)}
function uniqueParts(values){const seen=new Set();return values.filter(Boolean).filter(value=>{const key=String(value).trim().toLocaleLowerCase("fr");if(!key||seen.has(key))return false;seen.add(key);return true})}
function locationText(o){return uniqueParts([o.ville,o.departement,o.region]).join(" · ")}
function isCurrentOffer(o){if(!o.date_limite)return true;const today=new Date();today.setHours(0,0,0,0);const deadline=new Date(o.date_limite+"T23:59:59");return deadline>=today}

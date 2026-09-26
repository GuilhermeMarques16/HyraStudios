const $=s=>document.querySelector(s);
const navItems=[["#sobre","Início"],["#sobre","Sobre"],["#studios","Studios"],["#sustentabilidade","Sustentabilidade"],["#reward","HYRA REWARD"],["#investimento","Investimento"],["#expansao","Expansão"],["#footer","Contato"]];
$("#navlinks").innerHTML=navItems.map(n=>`<a href="${n[0]}" class="navlink">${n[1]}</a>`).join("");
$("#mobileMenu").innerHTML=navItems.map(n=>`<a href="${n[0]}" class="navlink block py-1">${n[1]}</a>`).join("")+'<a href="#sobre" class="btn-primary text-center mt-2">Conheça a Hyra</a>';
$("#footerLinks").innerHTML=navItems.map(n=>`<a href="${n[0]}" class="hover:underline">${n[1]}</a>`).join("");
$("#burger").onclick=()=>$("#mobileMenu").classList.toggle("hidden");
document.querySelectorAll('#mobileMenu a').forEach(a=>a.onclick=()=>$("#mobileMenu").classList.add("hidden"));

const about=[["🏠","MORADIA","Studios funcionais para diferentes estilos de vida."],["💼","NEGÓCIOS","Espaços comerciais para empreendedores e empresas."],["⚙️","TECNOLOGIA","Soluções inteligentes integradas aos espaços."],["🌱","SUSTENTABILIDADE","Modelo pensado para reduzir desperdícios e incentivar práticas sustentáveis."]];
$("#aboutCards").innerHTML=about.map(c=>`<div class="card p-6"><div class="text-3xl mb-3">${c[0]}</div><h3 class="font-display font-700 mb-2">${c[1]}</h3><p class="text-sm" style="color:var(--ink-soft)">${c[2]}</p></div>`).join("");

const tiers=[["BÁSICO","Uma solução funcional e acessível."],["MÉDIO","Equilíbrio entre conforto, tecnologia e preço."],["PREMIUM","Maior nível de conforto, estrutura e diferenciação."]];
$("#tierCards").innerHTML=tiers.map(t=>`<div class="card p-6 text-center"><h4 class="font-display font-700 mb-2" style="color:var(--brand)">${t[0]}</h4><p class="text-sm" style="color:var(--ink-soft)">${t[1]}</p></div>`).join("");

const pricing={
 "Brasil":{sym:"R$",res:[2000,2500,3000],com:[3000,4000,5000]},
 "EUA":{sym:"US$",res:[1500,1900,2500],com:[2500,3500,5000]},
 "Japão":{sym:"¥",res:[90000,120000,160000],com:[180000,250000,350000]}
};
const tierNames=["Básico","Médio","Premium"];
function renderPricing(country){
  const d=pricing[country];
  const block=(title,arr)=>`<div class="card p-7"><h4 class="font-display font-700 mb-4">${title}</h4>${arr.map((v,i)=>`<div class="flex justify-between py-2 border-b text-sm" style="border-color:var(--line)"><span>${tierNames[i]}</span><b>${d.sym} ${v.toLocaleString('pt-BR')}/mês</b></div>`).join("")}</div>`;
  $("#priceGrid").innerHTML=block("RESIDENCIAL",d.res)+block("COMERCIAL",d.com);
  $("#countryTabs").innerHTML=Object.keys(pricing).map(c=>`<button data-c="${c}" class="px-5 py-2 rounded-full text-sm font-semibold border" style="border-color:var(--line);${c===country?'':''}" onclick="renderPricing('${c}')">${c==='Brasil'?'🇧🇷':c==='EUA'?'🇺🇸':'🇯🇵'} ${country===c?'':''}${c}</button>`).join("");
  document.querySelectorAll('#countryTabs button').forEach(b=>b.classList.toggle('tag-active',b.dataset.c===country));
}
renderPricing("Brasil");

const steps=[["1","ESCOLHA","O cliente escolhe o tipo de studio."],["2","CONTRATE","Seleciona o período de locação."],["3","VIVA OU EMPREENDA","Utiliza um espaço moderno e funcional."],["4","CONECTE-SE","Utiliza as soluções tecnológicas e sustentáveis da Hyra."]];
$("#flowSteps").innerHTML=steps.map((s,i)=>`<div class="card p-6 relative"><span class="font-display font-800 text-3xl" style="color:var(--brand)">${s[0]}</span><h4 class="font-display font-700 mt-2 mb-1">${s[1]}</h4><p class="text-sm" style="color:var(--ink-soft)">${s[2]}</p>${i<3?'<span class="hidden lg:block absolute top-1/2 -right-4 text-2xl" style="color:var(--brand)">→</span>':''}</div>`).join("");

const cycle=["RECICLAR","GERAR PONTOS","RECEBER BENEFÍCIOS","RECICLAR NOVAMENTE"];
$("#sustCycle").innerHTML=cycle.map((c,i)=>`<span class="chip px-5 py-3 rounded-full font-semibold text-sm">${c}</span>${i<cycle.length-1?'<span class="text-2xl" style="color:var(--brand)">→</span>':''}`).join("");

const rflow=["SEPARAR","DEPOSITAR","IDENTIFICAR","PONTUAR","RESGATAR","DESTINAR"];
$("#rewardFlow").innerHTML=rflow.map((c,i)=>`<span class="px-4 py-2 rounded-full font-semibold text-sm" style="background:rgba(255,255,255,.18)">${c}</span>${i<rflow.length-1?'<span>→</span>':''}`).join("");

const values=[["PATROCÍNIOS","Marcas podem financiar benefícios e campanhas."],["MÍDIA","Possibilidade de publicidade nas estações."],["PARCERIAS","Comércios podem oferecer cupons e benefícios."],["FIDELIZAÇÃO","Benefícios ajudam a aumentar a retenção dos clientes."],["VALORIZAÇÃO","A sustentabilidade pode aumentar a percepção de valor dos espaços."]];
$("#valueCards").innerHTML=values.map(v=>`<div class="p-5 rounded-xl" style="background:rgba(255,255,255,.12)"><h5 class="font-display font-700 mb-1">${v[0]}</h5><p class="text-sm opacity-90">${v[1]}</p></div>`).join("");

const costs=[["Imóvel + encargos",1150],["Operação e manutenção",250],["Promoção",125],["Recuperação do investimento",350]];
const maxC=1150;
$("#costBars").innerHTML=costs.map(c=>`<div><div class="flex justify-between text-sm mb-1"><span style="color:var(--ink-soft)">${c[0]}</span><b>R$ ${c[1]}</b></div><div style="background:var(--bg);border-radius:6px;height:10px;overflow:hidden"><div class="bar" style="width:0%;height:100%;background:var(--brand);border-radius:6px" data-w="${c[1]/maxC*100}%"></div></div></div>`).join("");

const intl=[["🇧🇷 Brasil","R$ 2.500","R$ 625","25%"],["🇺🇸 EUA","US$ 1.900","US$ 415","21,8%"],["🇯🇵 Japão","¥120.000","¥22.000","18,3%"]];
$("#intlCards").innerHTML=intl.map(c=>`<div class="card p-6 text-center"><h4 class="font-display font-700 mb-4">${c[0]}</h4><p class="text-sm" style="color:var(--ink-soft)">Receita</p><p class="font-semibold mb-2">${c[1]}</p><p class="text-sm" style="color:var(--ink-soft)">Sobra operacional</p><p class="font-semibold mb-2">${c[2]}</p><p class="text-sm" style="color:var(--ink-soft)">Margem</p><p class="font-display font-800 text-xl" style="color:var(--brand)">${c[3]}</p></div>`).join("");

const mkt=[["Brasil Res.","5%"],["Brasil Com.","4%"],["EUA Res.","5%"],["EUA Com.","5%"],["Japão Res.","5%"],["Japão Com.","5%"]];
$("#mktBudget").innerHTML=mkt.map(m=>`<div class="card p-4 text-center"><p class="text-xs" style="color:var(--ink-soft)">${m[0]}</p><p class="font-display font-800 text-lg" style="color:var(--brand)">${m[1]}</p></div>`).join("");
const channels=["Redes sociais","Anúncios digitais","Plataformas imobiliárias","Indicações","Prospecção B2B","Brokers","Empresas","Coworkings","Parceiros locais"];
$("#mktChannels").innerHTML=channels.map(c=>`<span class="px-3 py-1 rounded-full border mr-2 mb-2 inline-block" style="border-color:var(--line)">${c}</span>`).join("");

const ind=[["R$ 2.500","Aluguel médio residencial no Brasil"],["25%","Margem estimada no cenário-base brasileiro"],["US$ 1.900","Aluguel médio residencial nos EUA"],["21,8%","Margem estimada nos EUA"],["¥120.000","Aluguel médio residencial no Japão"],["18,3%","Margem estimada no Japão"]];
$("#indicators").innerHTML=ind.map(i=>`<div class="card p-7 text-center"><p class="font-display font-800 text-3xl mb-2" style="color:var(--brand)">${i[0]}</p><p class="text-sm" style="color:var(--ink-soft)">${i[1]}</p></div>`).join("");

const exp=["🇧🇷 BRASIL — Base de operação","🇺🇸 ESTADOS UNIDOS — Expansão internacional","🇯🇵 JAPÃO — Expansão internacional"];
$("#expansionFlow").innerHTML=exp.map((e,i)=>`<span class="chip px-6 py-3 rounded-full font-semibold">${e}</span>${i<exp.length-1?'<span class="text-2xl" style="color:var(--brand)">↓</span>':''}`).join("");

const diffs=[["01","ESPAÇOS INTELIGENTES"],["02","MODELO RESIDENCIAL E COMERCIAL"],["03","SUSTENTABILIDADE"],["04","HYRA REWARD"],["05","RECEITA RECORRENTE"],["06","EXPANSÃO INTERNACIONAL"],["07","CONTROLE OPERACIONAL"],["08","TECNOLOGIA"]];
$("#diffCards").innerHTML=diffs.map(d=>`<div class="card p-6"><span class="font-display font-800 text-2xl" style="color:var(--accent)">${d[0]}</span><h4 class="font-display font-700 mt-2">${d[1]}</h4></div>`).join("");

// scroll animations
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");
  if(e.target.id==="financeiro")document.querySelectorAll("#costBars .bar").forEach(b=>b.style.width=b.dataset.w);
}}),{threshold:.15});
document.querySelectorAll(".fade").forEach(el=>obs.observe(el));

// nav bg on scroll
window.addEventListener("scroll",()=>{$("#nav").style.boxShadow=window.scrollY>20?"0 4px 24px rgba(0,0,0,.06)":"none";});

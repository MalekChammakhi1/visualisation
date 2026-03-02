function _1(md){return(
md`## Groupe : TUN
### Binôme : Marwane AGREBI & Malek CHAMMAKHI`
)}

function _2(md){return(
md`Sujet : L'impact des crises sanitaires sur la récolte de bois en France : analyse de la filière forêt bois face aux défis environnementaux`
)}

function _3(md){return(
md`Source : https://agreste.agriculture.gouv.fr/agreste-web/disaron/Chd2501/detail/
https://www.igedd.developpement-durable.gouv.fr/IMG/pdf/015817-01_rapport_publie_cle5431ce.pdf`
)}

function _4($0,detailChart,laMap,$1,focusAnalyse,detailChart1,reponseGraph,chartMinimalist,$2,laMapDynamique,htl){return(
htl.html`
<div style="max-width:1100px; margin:0 auto 24px auto; text-align:center;">
  <div style="font-size:28px; font-weight:700; letter-spacing:0.5px; margin-bottom:6px;">
    Crise sanitaire des forêts françaises
  </div>
  <div style="font-size:16px; color:#555;">
    Quand la récolte de bois devient une récolte de crise
  </div>
</div>

<div style="display:grid; grid-template-columns: 3fr 1fr; gap:6px; align-items:start; max-width:1100px; margin: 0 auto;"> 
  <div> 
    <div style="margin-bottom:8px; font:600 18px system-ui;"><u>Évolution de récolte des bois (2018–2023)</u></div>
    ${$0} 
  </div> 
  <div> 
    <div style="margin-bottom:8px; font:600 18px system-ui;"><u>Détail par sous-catégorie (2018–2023)</u></div>
    ${detailChart} 
  </div> 
</div>

<div style="display:flex; justify-content:center; margin-top:14px;">
  <div style="width:min(900px, 100%);">
    <div style="margin-bottom:8px; font:600 18px system-ui; text-align:center;"><u>Carte par région : Récolte 2023</u></div>
    ${laMap}
  </div>
</div>

<div style="margin: 30px auto; max-width:1100px; text-align:center;">
  <div style="margin-bottom:15px; font:600 18px system-ui;"><u>Exploration des dynamiques de crise</u></div>
  ${$1}
</div>

<div style="
  display: grid;
  grid-template-columns: 700px 1fr; 
  gap: 25px;
  max-width: 1100px;
  margin: 10px auto;
  align-items: start;
  background: #f8f9fb; 
  padding: 20px;
  border-radius: 12px;
">
  <div style="
    width: 650px; 
    height: 500px; 
    background: #ffffff; 
    padding: 20px; 
    border-radius: 10px; 
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  ">
    <div style="margin-bottom:15px; font:700 20px system-ui; text-align:center; color: #1a202c; border-bottom: 2px solid #edf2f7; padding-bottom: 10px;">
      ${
        focusAnalyse === "crise" ? "Détail de la Crise Sanitaire" : 
        focusAnalyse === "basculement" ? "Le Basculement Énergétique" : 
        "Statistiques Globales de Récolte"
      }
    </div>

    <div style="flex-grow: 1; display: flex; align-items: center; justify-content: center; overflow: hidden;">
       <style>
          /* Force les SVG internes à ne pas dépasser du cadre blanc */
          .focus-visualisation svg, .focus-visualisation canvas {
            max-width: 100% !important;
            max-height: 380px !important; /* Laisse de la place pour le titre */
            height: auto !important;
          }
       </style>
       <div class="focus-visualisation" style="width: 100%; display: flex; justify-content: center;">
          ${
            focusAnalyse === "crise" ? detailChart1 : 
            focusAnalyse === "basculement" ? reponseGraph : 
            chartMinimalist()
          }
       </div>
    </div>
  </div>

  <div style="display: flex; flex-direction: column; gap: 20px;">
    <div style="background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
      <div style="margin-bottom:8px; font:600 13px system-ui; text-align:center; color: #718096; text-transform: uppercase; letter-spacing: 0.5px;">
        ${focusAnalyse === "crise" ? "Dynamique Énergie" : "Détails Sanitaires"}
      </div>
      <div style="transform: scale(0.85); transform-origin: center top; height: 180px; display: flex; align-items: center; justify-content: center;">
        ${focusAnalyse === "crise" ? reponseGraph : detailChart1}
      </div>
    </div>

    <div style="background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
      <div style="margin-bottom:8px; font:600 13px system-ui; text-align:center; color: #718096; text-transform: uppercase; letter-spacing: 0.5px;">
        ${focusAnalyse === "stats" ? "Dynamique Énergie" : "Bilan Global"}
      </div>
      <div style="transform: scale(0.85); transform-origin: center top; height: 180px; display: flex; align-items: center; justify-content: center;">
        ${focusAnalyse === "stats" ? reponseGraph : chartMinimalist()}
      </div>
    </div>
  </div>
</div>

<div style="background: #f0f2f5; padding: 20px; border-radius: 8px; margin-top: 30px; max-width:1100px; margin-left:auto; margin-right:auto;">
  <div style="max-width:900px; margin: 0 auto;">
    <div style="text-align:center; margin-bottom:15px;">
       <div style="font:600 20px system-ui; margin-bottom:10px;">
         <u>Capacité industrielle vs Pression de récolte</u>
       </div>
       <div style="display:inline-block; background:white; padding:10px; border-radius:20px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
         <style>
           div.oi-3a8703 { font-size: 16px; } 
           label { cursor: pointer; font-weight: 1000 !important; }
           input[type="radio"] { width: 18px; height: 18px; vertical-align: middle; }
         </style>
         ${$2}
       </div>
    </div>
    <div style="display:flex; justify-content:center;">
       ${laMapDynamique}
    </div>
  </div>
</div>
\``
)}

function _prototype(FileAttachment){return(
FileAttachment("prototype.jpeg").image()
)}

function _6(htl){return(
htl.html`<table>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>`
)}

function _workbook(FileAttachment){return(
FileAttachment("Récolte_de_bois_par_région_de_provenance_en_2023.xlsx").xlsx()
)}

function _focusAnalyse(Inputs){return(
Inputs.radio(
  new Map([
    ["Analyse de la Crise (Sanitaire)", "crise"],
    ["Basculement Historique (Énergie)", "basculement"],
    ["Statistique Globale (8%)", "stats"]
  ]),
  {label: "Choisir l'analyse prioritaire :", value: "crise"}
)
)}

function _sheet(workbook){return(
workbook.sheet(0, { headers: true })
)}

function _regionData(sheet,selection)
{
  const data = sheet
    .filter(d => d["Récolte"] && d["Récolte"] !== "France")
    .map(d => {
      const nom = d["Récolte"].trim()

      // --- BOIS D’ŒUVRE (grumes) ---
      const grumes_feu = +d["GrumesFeuillus"] || 0
      const grumes_con = +d["GrumesConifères"] || 0
      const grumes_total = grumes_feu + grumes_con

      // --- BOIS D’INDUSTRIE ---
      const ind_trit = +d["Bois d'industrieTrituration"] || 0
      const ind_autres = +d["Bois d'industrieAutres"] || 0
      const ind_total = ind_trit + ind_autres

      // --- BOIS ÉNERGIE ---
      const energie = +d["Bois énergie"] || 0

      let value = 0
      let total = 0
      let pct_con = 0
      let details = {}

      if (selection === "Bois d'œuvre") {
        value = grumes_total
        total = grumes_total
        pct_con = total > 0 ? (grumes_con / total) * 100 : 0
        details = { feuillus: grumes_feu, coniferes: grumes_con }
      }

      if (selection === "Bois d'industrie") {
        value = ind_total
        total = ind_total
        pct_con = total > 0 ? (ind_trit / total) * 100 : 0
        details = { trituration: ind_trit, autres: ind_autres }
      }

      if (selection === "Bois énergie") {
        value = energie
        total = energie
        pct_con = total > 0 ? (energie / total) * 100 : 0
        details = { energie: energie }
      }

      return { nom, value, total, pct_con, details }
    })

  return data
}


async function _entreprisesData(FileAttachment)
{
  // On lit la feuille
  const sheetData = await FileAttachment(
    "entreprise.csv"
  ).csv({ typed: true })

  // On filtre et met en forme par région
  const data = sheetData
    .filter(d => d.Regions && d.Regions !== "Total" && d.Regions !== "France")
    .map(d => {
      return {
        nom: d.Regions.trim(),
        exploitationSeule: +d["Nombre d'exploitations forestières sans scierie"] || 0,
        scierieSeule: +d["Nombre de scieries sans exploitation forestière"] || 0,
        exploitationEtScierie: +d["Nombre d'exploitations forestières avec scieries"] || 0,
        total: +d.Total || 0,
        activiteExploitation: +d["Entreprises ayant une activité d'exploitation forestière"] || 0,
        activiteScierie: +d["Entreprises ayant une activité de scierie"] || 0
      }
    })

  return data
}


function _drawRecolteMap(d3){return(
async function(regionData, selection, node) {
  const width = 900
  const height = Math.min(720, width * 0.72)

  // Si node n'est pas fourni, on crée un conteneur
  // if (!node) node = html`<div style="position:relative"></div>`
  node.innerHTML = ""


  // --- GeoJSON France ---
  const franceRegions = await d3.json(
    "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions-version-simplifiee.geojson"
  )

  const dataMap = new Map(regionData.map(d => [d.nom, d]))

  const svg = d3.select(node)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#f8f9fa")
    .style("font-family", "system-ui, sans-serif")

  const projection = d3.geoMercator()
    .fitExtent([[15, 15], [width - 15, height - 15]], franceRegions)
  const path = d3.geoPath().projection(projection)

  const maxValue = d3.max(regionData, d => d.value) || 1

  // --- Couleur selon la sélection ---
  let colorInterpolator, legendTitle
  if (selection === "Bois d'œuvre") {
    colorInterpolator = d3.interpolateBlues
    legendTitle = "Bois d’œuvre (mill. m³)"
  }
  if (selection === "Bois d'industrie") {
    colorInterpolator = d3.interpolateOranges
    legendTitle = "Bois d’industrie (mill. m³)"
  }
  if (selection === "Bois énergie") {
    colorInterpolator = d3.interpolateGreens
    legendTitle = "Bois énergie (mill. m³)"
  }

  const colorScale = d3.scaleSequential()
    .domain([0, maxValue])
    .interpolator(colorInterpolator)

  // --- Tooltip ---
  const tooltip = d3.select(node)
    .append("div")
    .style("position", "absolute")
    .style("background", "white")
    .style("padding", "8px")
    .style("border", "1px solid #ccc")
    .style("border-radius", "4px")
    .style("pointer-events", "none")
    .style("opacity", 0)

  // --- Dessin des régions ---
  svg.selectAll("path")
    .data(franceRegions.features)
    .join("path")
    .attr("d", path)
    .attr("fill", d => {
      const reg = dataMap.get(d.properties.nom)
      return reg ? colorScale(reg.value) : "#e0e0e0"
    })
    .attr("stroke", "#333")
    .attr("stroke-width", 0.8)
    .on("mouseover", (event, d) => {
      const reg = dataMap.get(d.properties.nom)
      if (!reg) return

      let content = `<strong>${reg.nom}</strong><br/>Volume total : ${reg.value.toLocaleString("fr-FR")} m³<br/>`

      if (selection === "Bois d'œuvre") {
        content += `Feuillus : ${reg.details.feuillus.toLocaleString("fr-FR")} m³<br/>
                    Conifères : ${reg.details.coniferes.toLocaleString("fr-FR")} m³<br/>
                    % Conifères : ${reg.pct_con.toFixed(1)} %`
      }
      if (selection === "Bois d'industrie") {
        content += `Trituration : ${reg.details.trituration.toLocaleString("fr-FR")} m³<br/>
                    Autres : ${reg.details.autres.toLocaleString("fr-FR")} m³<br/>
                    % Trituration : ${reg.pct_con.toFixed(1)} %`
      }
      if (selection === "Bois énergie") {
        content += `Volume : ${reg.details.energie.toLocaleString("fr-FR")} m³<br/>`
      }

      tooltip.html(content).style("opacity", 1)
    })
    .on("mousemove", (event) => {
      tooltip
        .style("left", (event.offsetX + 15) + "px")
        .style("top", (event.offsetY + 15) + "px")
    })
    .on("mouseout", () => tooltip.style("opacity", 0))

  // --- Labels centrés ---
  svg.selectAll("text")
    .data(franceRegions.features)
    .join("text")
    .attr("transform", d => {
      const [x, y] = path.centroid(d)
      return `translate(${x}, ${y})`
    })
    .attr("text-anchor", "middle")
    .attr("dy", 4)
    .style("font-size", "10px")
    .style("font-weight", "bold")
    .style("fill", "#000")
    .style("stroke", "#fff")
    .style("stroke-width", 4.5)
    .style("paint-order", "stroke")
    .text(d => d.properties.nom.replace(/-/g, " "))

  // --- Légende ---
  const legendWidth = 200
  const legendHeight = 10
  const legendSvg = d3.select(node)
    .append("svg")
    .attr("width", legendWidth + 50)
    .attr("height", 50)
    .style("margin-top", "10px")

  // Titre légende
  legendSvg.append("text")
    .attr("x", 20)
    .attr("y", 15)
    .text(legendTitle)
    .style("font-size", "12px")
    .style("font-weight", "bold")

  // Dégradé
  const defs = legendSvg.append("defs")
  const linearGradient = defs.append("linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("x2", "100%")
    .attr("y1", "0%")
    .attr("y2", "0%")

  linearGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", colorScale(0))
  linearGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", colorScale(maxValue))

  legendSvg.append("rect")
    .attr("x", 20)
    .attr("y", 20)
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#gradient)")
    .style("stroke", "#333")

  const legendScale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([20, 20 + legendWidth])

  const legendAxis = d3.axisBottom(legendScale)
    .ticks(5)
    .tickFormat(d => d.toFixed(0))

  legendSvg.append("g")
    .attr("transform", `translate(0, ${20 + legendHeight})`)
    .call(legendAxis)

  return node
}
)}

function _drawEntreprisesMap(d3){return(
async function(entreprisesData, node) {
  const width = 900
  const height = Math.min(720, width * 0.72)

  // Si node n'est pas fourni, on crée un conteneur
  // if (!node) node = html`<div style="position:relative"></div>`
  node.innerHTML = ""

  // --- GeoJSON France ---
  const franceRegions = await d3.json(
    "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions-version-simplifiee.geojson"
  )

  const dataMap = new Map(entreprisesData.map(d => [d.nom, d]))

  const svg = d3.select(node)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#f8f9fa")
    .style("font-family", "system-ui, sans-serif")

  const projection = d3.geoMercator()
    .fitExtent([[15, 15], [width - 15, height - 15]], franceRegions)
  const path = d3.geoPath().projection(projection)

  const maxValue = d3.max(entreprisesData, d => d.total) || 1
  const colorInterpolator = d3.interpolatePurples
  const legendTitle = "Nombre total d'entreprises"

  const colorScale = d3.scaleSequential()
    .domain([0, maxValue])
    .interpolator(colorInterpolator)

  // --- Tooltip ---
  const tooltip = d3.select(node)
    .append("div")
    .style("position", "absolute")
    .style("background", "white")
    .style("padding", "8px")
    .style("border", "1px solid #ccc")
    .style("border-radius", "4px")
    .style("pointer-events", "none")
    .style("opacity", 0)

  // --- Dessin des régions ---
  svg.selectAll("path")
    .data(franceRegions.features)
    .join("path")
    .attr("d", path)
    .attr("fill", d => {
      const reg = dataMap.get(d.properties.nom)
      return reg ? colorScale(reg.total) : "#e0e0e0"
    })
    .attr("stroke", "#333")
    .attr("stroke-width", 0.8)
    .on("mouseover", (event, d) => {
      const reg = dataMap.get(d.properties.nom)
      if (!reg) return

      let content = `<strong>${reg.nom}</strong><br/>`
      content += `Total entreprises : ${reg.total}<br/>`
      content += `Exploitation forestière seule : ${reg.exploitationSeule}<br/>`
      content += `Scierie seule : ${reg.scierieSeule}<br/>`
      content += `Exploitation + Scierie : ${reg.exploitationEtScierie}`

      tooltip.html(content).style("opacity", 1)
    })
    .on("mousemove", (event) => {
      tooltip
        .style("left", (event.offsetX + 15) + "px")
        .style("top", (event.offsetY + 15) + "px")
    })
    .on("mouseout", () => tooltip.style("opacity", 0))

  // --- Labels centrés ---
  svg.selectAll("text")
    .data(franceRegions.features)
    .join("text")
    .attr("transform", d => `translate(${path.centroid(d)})`)
    .attr("text-anchor", "middle")
    .attr("dy", 4)
    .style("font-size", "10px")
    .style("font-weight", "bold")
    .style("fill", "#000")
    .style("stroke", "#fff")
    .style("stroke-width", 4.5)
    .style("paint-order", "stroke")
    .text(d => d.properties.nom.replace(/-/g, " "))

  // --- Légende ---
  const legendWidth = 200
  const legendHeight = 10
  const legendSvg = d3.select(node)
    .append("svg")
    .attr("width", legendWidth + 50)
    .attr("height", 50)
    .style("margin-top", "10px")

  // Titre légende
  legendSvg.append("text")
    .attr("x", 20)
    .attr("y", 15)
    .text(legendTitle)
    .style("font-size", "12px")
    .style("font-weight", "bold")

  // Dégradé
  const defs = legendSvg.append("defs")
  const linearGradient = defs.append("linearGradient")
    .attr("id", "gradientEntreprises")
    .attr("x1", "0%")
    .attr("x2", "100%")
    .attr("y1", "0%")
    .attr("y2", "0%")

  linearGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", colorScale(0))
  linearGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", colorScale(maxValue))

  legendSvg.append("rect")
    .attr("x", 20)
    .attr("y", 20)
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#gradientEntreprises)")
    .style("stroke", "#333")

  const legendScale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([20, 20 + legendWidth])

  const legendAxis = d3.axisBottom(legendScale)
    .ticks(5)
    .tickFormat(d => d.toFixed(0))

  legendSvg.append("g")
    .attr("transform", `translate(0, ${20 + legendHeight})`)
    .call(legendAxis)

  return node
}
)}

function _Type_of_View(Inputs){return(
Inputs.select(
  ["Récolte", "Entreprises"],
  { value: "Récolte", label: "Afficher:" } 
)
)}

function _Categorie_Recolte(Inputs){return(
Inputs.select(
  ["Bois d'œuvre", "Bois d'industrie", "Bois énergie"],
  { value: "Bois d'œuvre", label: "Catégorie:" }
)
)}

function _16(Type_of_View){return(
Type_of_View.value
)}

function _laMap1(html,Type_of_View,drawRecolteMap,regionData,Categorie_Recolte,drawEntreprisesMap,entreprisesData)
{
  const node = html`<div style="position:relative"></div>`

  if (Type_of_View.value === "Récolte") {
    drawRecolteMap(regionData, Categorie_Recolte.value, node)
  } else {
    drawEntreprisesMap(entreprisesData, node)
  }

  return node
}


function _chartConfig(focusAnalyse){return(
(id) => {
  const isFocus = focusAnalyse === id;
  
  return {
    isFocus: isFocus,
    width: isFocus ? 700 : 280,
    height: isFocus ? 450 : 180,
    margin: isFocus 
      ? { top: 40, right: 150, bottom: 50, left: 70 } 
      : { top: 20, right: 10, bottom: 30, left: 40 },
    showLegend: isFocus,
    fontSize: isFocus ? "12px" : "10px"
  };
}
)}

async function _RecolteWorkbook(FileAttachment){return(
await FileAttachment("Récolte_de_bois.xlsx").xlsx()
)}

function _sheet2(RecolteWorkbook){return(
RecolteWorkbook.sheet(0, { headers: true })
)}

function _categories(){return(
[
    "Bois d'œuvre",
    "Bois d'industrie",
    "Bois énergie",
    "Récolte de bois commercialisé"   
  ]
)}

function _detailBoisOeuvre(){return(
[
  { essence: "Chêne",               2018: 2392, 2019: 2332, 2020: 2164, 2021: 2152, 2022: 2271, 2023: 2155 },
  { essence: "Hêtre",               2018: 1042, 2019: 936,  2020: 837,  2021: 895,  2022: 928,  2023: 857  },
  { essence: "Feuillus précieux",   2018: 252,  2019: 274,  2020: 224,  2021: 242,  2022: 257,  2023: 304  },
  { essence: "Peuplier",            2018: 1456, 2019: 1450, 2020: 1281, 2021: 1419, 2022: 1491, 2023: 1214 },
  { essence: "Pin maritime",        2018: 3601, 2019: 3203, 2020: 2607, 2021: 3079, 2022: 3204, 2023: 2831 },
  { essence: "Sapin",               2018: 6664, 2019: 3377, 2020: 2184, 2021: 2919, 2022: 2981, 2023: 3029 },
  { essence: "Épicéa",              2018: null, 2019: 3420, 2020: 4620, 2021: 5359, 2022: 4327, 2023: 3925 },
  { essence: "Douglas",             2018: 2919, 2019: 2967, 2020: 3131, 2021: 3179, 2022: 2834, 2023: 2728 }
]
)}

function _detailBoisIndustrie(){return(
[
  { essence: "Feuillus (trituration)", 2018: 4133, 2019: 4049, 2020: 3796, 2021: 3724, 2022: 3851, 2023: 3640 },
  { essence: "Conifères (trituration)", 2018: 5451, 2019: 5806, 2020: 5680, 2021: 5744, 2022: 5810, 2023: 5978 },
  { essence: "Autres bois d'industrie", 2018: 756,  2019: 678,  2020: 546,  2021: 657,  2022: 650,  2023: 645  }
]
)}

function _detailBoisEnergie(){return(
[
  { essence: "Bois ronds > 2 m",         2018: 1947, 2019: 1836, 2020: 2023, 2021: 1873, 2022: 1993, 2023: 2090 },
  { essence: "Bois en rondins et bûches < 2 m", 2018: 3863, 2019: 3529, 2020: 3047, 2021: 3602, 2022: 3828, 2023: 3891 },
  { essence: "Plaquettes forestières",   2018: 2702, 2019: 2696, 2020: 3064, 2021: 3420, 2022: 3790, 2023: 4383 }
]
)}

function _categoriesDetails(detailBoisOeuvre,detailBoisIndustrie,detailBoisEnergie){return(
{
  "Bois d'œuvre": detailBoisOeuvre,
  "Bois d'industrie": detailBoisIndustrie,
  "Bois énergie": detailBoisEnergie
}
)}

function _macroData(sheet2,categories)
{
  const ordre = ["Bois d'œuvre", "Bois d'industrie", "Bois énergie", "Récolte de bois commercialisé"];

  const rows = sheet2
    .map(row => {
      const lib = (row.LIBELLE || "").trim();
      if (!categories.includes(lib)) return null;

      const entry = { catégorie: lib };
      for (let year = 2018; year <= 2023; year++) {
        const val = row[String(year)];
        if (val !== undefined && val !== "" && !isNaN(Number(val))) entry[year] = Number(val);
      }
      return entry;
    })
    .filter(Boolean)
    .sort((a, b) => ordre.indexOf(a.catégorie) - ordre.indexOf(b.catégorie));

  return rows;
}


function _longMacro(macroData){return(
macroData
  .flatMap(d =>
    [2018, 2019, 2020, 2021, 2022, 2023].map(year => ({
      catégorie: d.catégorie,
      year,
      volume: d[year] ?? null
    }))
  )
  .filter(d => d.volume !== null)
)}

function _selection(html,localStorage,d3,longMacro)
{
  const STORAGE_KEY = "macro-selection";
  const node = html`<div></div>`;

  const categories = ["Bois d'œuvre", "Bois d'industrie", "Bois énergie"];
  node.value = localStorage.getItem(STORAGE_KEY) ?? "Bois d'œuvre";

  const colors = d3.scaleOrdinal()
    .domain(categories)
    .range(["#1f77b4", "#ff7f0e", "#2ca02c"]);

  const margin = { top: 20, right: 150, bottom: 40, left: 70 };
  const width = 600 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const years = Array.from(new Set(longMacro.map(d => d.year)));

  const stackData = years.map(y => {
    const obj = { year: y };
    longMacro
      .filter(d => d.year === y && d.catégorie !== "Récolte de bois commercialisé")
      .forEach(d => (obj[d.catégorie] = d.volume));
    return obj;
  });

  const stack = d3.stack().keys(categories)(stackData);

  const x = d3.scaleBand()
    .domain(years)
    .range([0, width])
    .padding(0.1)
    .align(0);

  const y = d3.scaleLinear()
    .domain([0, d3.max(stack[stack.length - 1], d => d[1])])
    .nice()
    .range([height, 0]);

  const area = d3.area()
    .x(d => x(d.data.year) + x.bandwidth() / 2)
    .y0(d => y(d[0]))
    .y1(d => y(d[1]));

  const areaHover = d3.area()
    .x(d => x(d.data.year) + x.bandwidth() / 2)
    .y0(d => y(d[0]) - 3)
    .y1(d => y(d[1]) + 3);

  const svg = d3.create("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("font", "10px sans-serif");

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // --- fonction d'update du "cadre rouge" ---
  function updateHighlight() {
    paths
      .attr("stroke", d => (d.key === node.value ? "red" : "none"))
      .attr("stroke-width", d => (d.key === node.value ? 3 : 0))
      .attr("stroke-linejoin", "round");
  }

  function setSelection(value) {
    node.value = value;
    localStorage.setItem(STORAGE_KEY, value);
    updateHighlight();
    node.dispatchEvent(new CustomEvent("input", { bubbles: true }));
  }

  // Aires empilées
  const paths = g.selectAll("path")
    .data(stack)
    .join("path")
    .attr("fill", d => colors(d.key))
    .attr("d", area)
    .style("cursor", "pointer")
    .on("click", (event, d) => setSelection(d.key))
    .on("mouseover", function(event, d) {
      d3.select(this).transition().duration(100).attr("d", areaHover(d));
    })
    .on("mouseout", function(event, d) {
      d3.select(this).transition().duration(100).attr("d", area(d));
    });

  // appliquer au chargement (valeur restaurée)
  updateHighlight();

  // Axes
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickValues(years).tickFormat(d3.format("d")));

  g.append("g").call(d3.axisLeft(y));

  // Légende cliquable
  const legend = svg.append("g")
    .attr("transform", `translate(${width + margin.left + 20},${margin.top})`);

  categories.forEach((cat, i) => {
    const gLegend = legend.append("g")
      .attr("transform", `translate(0, ${i * 25})`)
      .style("cursor", "pointer")
      .on("click", () => setSelection(cat));

    gLegend.append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", colors(cat));

    gLegend.append("text")
      .attr("x", 24)
      .attr("y", 13)
      .text(cat)
      .style("font-size", "12px")
      .attr("alignment-baseline", "middle");
  });

  node.appendChild(svg.node());
  return node;
}


function _detailChart(categoriesDetails,selection,html,d3)
{
  const data = categoriesDetails[selection];

  const years = [2018, 2019, 2020, 2021, 2022, 2023];

  // Transformation au format long
  const formattedData = [];
  data.forEach(d => {
    years.forEach(y => {
      formattedData.push({
        essence: d.essence,
        year: y,
        volume: d[y] || 0
      });
    });
  });

  const node = html`<div></div>`;

  const essences = Array.from(new Set(formattedData.map(d => d.essence)));
  const colors = d3.scaleOrdinal()
    .domain(essences)
    .range(d3.schemeTableau10);

  const margin = { top: 30, right: 150, bottom: 50, left: 70 }; // plus de marge droite pour la légende
  const width = 600 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  // Préparer données pour stack
  const stackData = years.map(y => {
    const obj = { year: y };
    formattedData.filter(d => d.year === y)
      .forEach(d => obj[d.essence] = d.volume);
    return obj;
  });

  const stack = d3.stack()
    .keys(essences)
    (stackData);

  const x = d3.scaleBand()
    .domain(years)
    .range([0, width])
    .padding(0.1)
    .align(0);

  const y = d3.scaleLinear()
    .domain([0, d3.max(stack[stack.length - 1], d => d[1])])
    .nice()
    .range([height, 0]);

  const area = d3.area()
    .x(d => x(d.data.year) + x.bandwidth() / 2)
    .y0(d => y(d[0]))
    .y1(d => y(d[1]));

  const areaHover = d3.area()
    .x(d => x(d.data.year) + x.bandwidth() / 2)
    .y0(d => y(d[0]) - 3)
    .y1(d => y(d[1]) + 3);

  const svg = d3.create("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("font", "10px sans-serif");

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Aires empilées par essence
  g.selectAll("path")
    .data(stack)
    .join("path")
    .attr("fill", d => colors(d.key))
    .attr("d", area)
    .style("cursor", "pointer")
    .on("mouseover", function(event, d) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr("d", areaHover(d));
    })
    .on("mouseout", function(event, d) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr("d", area(d));
    })
    .append("title") // info-bulle comme Plot
    .text(d => d.key);

  // Axe X
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickValues(years).tickFormat(d3.format("d")));

  // Axe Y
  g.append("g")
    .call(d3.axisLeft(y).ticks(6));

  // Titre
  svg.append("text")
    .attr("x", (width + margin.left + margin.right)/2)
    .attr("y", margin.top / 2)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .text(`Détail : ${selection}`);

  // Sous-titre
  svg.append("text")
    .attr("x", (width + margin.left + margin.right)/2)
    .attr("y", margin.top / 2 + 16)
    .attr("text-anchor", "middle")
    .style("font-size", "11px")
    .text("Répartition par essence ou type (milliers m³)");

  // --- LÉGENDE ---
  const legend = svg.append("g")
    .attr("transform", `translate(${width + margin.left + 20},${margin.top})`);

  essences.forEach((essence, i) => {
    const gLegend = legend.append("g")
      .attr("transform", `translate(0, ${i * 20})`);

    gLegend.append("rect")
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", colors(essence));

    gLegend.append("text")
      .attr("x", 20)
      .attr("y", 12)
      .text(essence)
      .style("font-size", "10px")
      .attr("alignment-baseline", "middle");
  });

  node.appendChild(svg.node());
  return node;
}


function _produits_accidentels_en_Feuille1(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Produits_accidentels_en_% - Feuille 1.csv"),{from:{table:"Produits_accidentels_en_% - Feuille 1"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _produitsAccidentelsSanitaires(){return(
{
  "Bois d'œuvre": [
    { essence: "Chêne", pct_acc: 0.2, pct_san: 3.9, pct_crise: 4.2 },
    { essence: "Hêtre", pct_acc: 0.2, pct_san: 13.4, pct_crise: 13.6 },
    { essence: "Châtaignier", pct_acc: 0.0, pct_san: 0.3, pct_crise: 0.3 },
    { essence: "Feuillus_precieux", pct_acc: 0.3, pct_san: 25.1, pct_crise: 25.4 },
    { essence: "Peuplier", pct_acc: 0.0, pct_san: 0.2, pct_crise: 0.3 },
    { essence: "Autres_feuillus", pct_acc: 0.0, pct_san: 10.3, pct_crise: 10.3 },
    { essence: "Sapin", pct_acc: 1.6, pct_san: 15.5, pct_crise: 17.1 },
    { essence: "Epicea", pct_acc: 1.2, pct_san: 21.0, pct_crise: 22.2 },
    { essence: "Douglas", pct_acc: 0.2, pct_san: 0.8, pct_crise: 1.0 },
    { essence: "Meleze", pct_acc: 0.6, pct_san: 0.8, pct_crise: 1.5 },
    { essence: "Pin_maritime", pct_acc: 6.2, pct_san: 0.1, pct_crise: 6.3 },
    { essence: "Pin_sylvestre", pct_acc: 0.3, pct_san: 1.8, pct_crise: 2.0 },
    { essence: "Autres_coniferes", pct_acc: 1.4, pct_san: 3.3, pct_crise: 4.7 }
  ],

  "Bois d'industrie": [
    { essence: "Feuillus_trituration", pct_acc: 0.4, pct_san: 4.0, pct_crise: 4.4 },
    { essence: "Coniferes_trituration", pct_acc: 5.9, pct_san: 4.6, pct_crise: 10.5 },
    { essence: "Coniferes_blancs_sapin_epicea", pct_acc: 1.6, pct_san: 13.7, pct_crise: 15.3 },
    { essence: "Pins_maritimes", pct_acc: 9.7, pct_san: 0.5, pct_crise: 10.1 },
    { essence: "Autres_coniferes_rouges", pct_acc: 0.8, pct_san: 4.5, pct_crise: 5.3 },
    { essence: "Autres_bois_industrie", pct_acc: 0.1, pct_san: 0.9, pct_crise: 1.1 }
  ],

  "Bois énergie": [
    { essence: "Bois_energie_total", pct_acc: 1.5, pct_san: 5.6, pct_crise: 7.1 }
  ]
}
)}

function _detailChart1(produitsAccidentelsSanitaires,selection,html,d3)
{
  const data = produitsAccidentelsSanitaires[selection];

  if (!data) return html`<div>Pas de données pour cette catégorie</div>`;

  // Calcul du % saine pour chaque essence
  data.forEach(d => {
    d.pct_saine = 100 - d.pct_acc - d.pct_san;
  });

  // Transformation au format long pour le stacking
  const formattedData = data.map(d => ({
    essence: d.essence,
    Saine: d.pct_saine,
    Accidentels: d.pct_acc,
    Sanitaires: d.pct_san
  }));

  const node = html`<div></div>`;

  const margin = { top: 40, right: 180, bottom: 60, left: 80 };
  const width = 600 - margin.left - margin.right;
  const height = 380 - margin.top - margin.bottom;

  const svg = d3.create("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("max-width", "100%") 
    .style("height", "auto") 
    .style("max-height", "380px") 
    .style("font-family", "system-ui, sans-serif"); 

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand()
    .domain(formattedData.map(d => d.essence))
    .range([0, width])
    .padding(0.15);

  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

  const color = d3.scaleOrdinal()
    .domain(["Saine", "Accidentels", "Sanitaires"])
    .range(["#a3d977", "#ffcc80", "#ff6666"]);

  // Stack
  const stack = d3.stack()
    .keys(["Saine", "Accidentels", "Sanitaires"]);

  const stackedData = stack(formattedData);

  // Barres empilées
  g.selectAll("g")
    .data(stackedData)
    .join("g")
    .attr("fill", d => color(d.key))
    .selectAll("rect")
    .data(d => d)
    .join("rect")
    .attr("x", d => x(d.data.essence))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())
    .append("title")
    .text(d => `${d.data.essence}\n${d.key} : ${d.data[d.key]} %`);

  // Axe X
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");

  // Axe Y
  g.append("g")
    .call(d3.axisLeft(y).ticks(10));

  // Titre
  svg.append("text")
    .attr("x", (width + margin.left + margin.right) / 2)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text(`Produits accidentels et sanitaires - ${selection}`);

  // Légende
  const legend = svg.append("g")
    .attr("transform", `translate(${width + margin.left + 30}, ${margin.top})`);

  ["Saine", "Accidentels", "Sanitaires"].forEach((key, i) => {
    const gLeg = legend.append("g").attr("transform", `translate(0, ${i * 25})`);
    gLeg.append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", color(key));
    gLeg.append("text")
      .attr("x", 25)
      .attr("y", 13)
      .text(key)
      .style("font-size", "12px");
  });

  node.appendChild(svg.node());
  return node;
}


async function _laMap(html,d3,regionData,selection)
{
  const width = 900
  const height = Math.min(720, width * 0.72)
  const node = html`<div style="position:relative"></div>`

  // --- GeoJSON France ---
  const franceRegions = await d3.json(
    "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions-version-simplifiee.geojson"
  )

  const dataMap = new Map(regionData.map(d => [d.nom, d]))

  const svg = d3.select(node)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#f8f9fa")
    .style("font-family", "system-ui, sans-serif")

  const projection = d3.geoMercator()
    .fitExtent([[15, 15], [width - 15, height - 15]], franceRegions)
  const path = d3.geoPath().projection(projection)

  const maxValue = d3.max(regionData, d => d.value) || 1

  // --- Couleur selon la sélection ---
  let colorInterpolator, legendTitle
  if (selection === "Bois d'œuvre") {
    colorInterpolator = d3.interpolateBlues
    legendTitle = "Bois d’œuvre (mill. m³)"
  }
  if (selection === "Bois d'industrie") {
    colorInterpolator = d3.interpolateOranges
    legendTitle = "Bois d’industrie (mill. m³)"
  }
  if (selection === "Bois énergie") {
    colorInterpolator = d3.interpolateGreens
    legendTitle = "Bois énergie (mill. m³)"
  }

  const colorScale = d3.scaleSequential()
    .domain([0, maxValue])
    .interpolator(colorInterpolator)

  // --- Tooltip ---
  const tooltip = d3.select(node)
    .append("div")
    .style("position", "absolute")
    .style("background", "white")
    .style("padding", "8px")
    .style("border", "1px solid #ccc")
    .style("border-radius", "4px")
    .style("pointer-events", "none")
    .style("opacity", 0)

  // --- Dessin des régions ---
  svg.selectAll("path")
    .data(franceRegions.features)
    .join("path")
    .attr("d", path)
    .attr("fill", d => {
      const reg = dataMap.get(d.properties.nom)
      return reg ? colorScale(reg.value) : "#e0e0e0"
    })
    .attr("stroke", "#333")
    .attr("stroke-width", 0.8)
    .on("mouseover", (event, d) => {
      const reg = dataMap.get(d.properties.nom)
      if (!reg) return

      let content = `<strong>${reg.nom}</strong><br/>Volume total : ${reg.value.toLocaleString("fr-FR")} m³<br/>`

      // Détail des sous-catégories
      if (selection === "Bois d'œuvre") {
        content += `Feuillus : ${reg.details.feuillus.toLocaleString("fr-FR")} m³<br/>
                    Conifères : ${reg.details.coniferes.toLocaleString("fr-FR")} m³<br/>
                    % Conifères : ${reg.pct_con.toFixed(1)} %`
      }
      if (selection === "Bois d'industrie") {
        content += `Trituration : ${reg.details.trituration.toLocaleString("fr-FR")} m³<br/>
                    Autres : ${reg.details.autres.toLocaleString("fr-FR")} m³<br/>
                    % Trituration : ${reg.pct_con.toFixed(1)} %`
      }
      if (selection === "Bois énergie") {
        content += `Volume : ${reg.details.energie.toLocaleString("fr-FR")} m³<br/>`
                    
      }

      tooltip.html(content).style("opacity", 1)
    })
    .on("mousemove", (event) => {
      tooltip
        .style("left", (event.offsetX + 15) + "px")
        .style("top", (event.offsetY + 15) + "px")
    })
    .on("mouseout", () => tooltip.style("opacity", 0))

  // --- Labels centrés ---
  svg.selectAll("text")
    .data(franceRegions.features)
    .join("text")
    .attr("transform", d => {
      const [x, y] = path.centroid(d)
      return `translate(${x}, ${y})`
    })
    .attr("text-anchor", "middle")
    .attr("dy", 4)
    .style("font-size", "10px")
    .style("font-weight", "bold")
    .style("fill", "#000")
    .style("stroke", "#fff")
    .style("stroke-width", 4.5)
    .style("paint-order", "stroke")
    .text(d => d.properties.nom.replace(/-/g, " "))

  // --- Légende ---
  const legendWidth = 200
  const legendHeight = 10
  const legendSvg = d3.select(node)
    .append("svg")
    .attr("width", legendWidth + 50)
    .attr("height", 50)
    .style("margin-top", "10px")

  // Titre légende
  legendSvg.append("text")
    .attr("x", 20)
    .attr("y", 15)
    .text(legendTitle)
    .style("font-size", "12px")
    .style("font-weight", "bold")

  // Dégradé
  const defs = legendSvg.append("defs")
  const linearGradient = defs.append("linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("x2", "100%")
    .attr("y1", "0%")
    .attr("y2", "0%")

  linearGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", colorScale(0))
  linearGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", colorScale(maxValue))

  legendSvg.append("rect")
    .attr("x", 20)
    .attr("y", 20)
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#gradient)")
    .style("stroke", "#333")

  const legendScale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([20, 20 + legendWidth])

  const legendAxis = d3.axisBottom(legendScale)
    .ticks(5)
    .tickFormat(d => d.toFixed(0))

  legendSvg.append("g")
    .attr("transform", `translate(0, ${20 + legendHeight})`)
    .call(legendAxis)

  return node
}


function _34(md){return(
md`C’est l’introduction géographique parfaite : on voit immédiatement que la crise (scolytes surtout sur épicéa/sapin) n’est pas uniforme → elle se concentre dans les régions riches en résineux (Sud-Est, Sud-Ouest, massifs montagneux).
Ça prépare très bien les visus suivantes (essences touchées, évolution temporelle, scieries, flux du bois sanitaire).`
)}

function _selectedRegion(Inputs,regionData){return(
Inputs.select(
  ["Toutes les régions", ...regionData.map(d => d.nom)],
  { label: "Sélectionner une région pour voir son exposition", value: "Toutes les régions" }
)
)}

function _accidentalsWorkbook(FileAttachment){return(
FileAttachment("Produits_accidentels_en_(millier_de_m3_ronds_sur_écorce).xlsx").xlsx()
)}

function _sheet1(accidentalsWorkbook){return(
accidentalsWorkbook.sheet(0, { headers: true })
)}

function _essenceRows(sheet1){return(
sheet1.filter(row => [
  "Épicéa", "Sapin", "Hêtre", "Feuillus précieux", "Chêne",
  "Pin maritime", "Douglas", "Peuplier"
].includes(row.LIBELLE))
)}

function _essenceData(essenceRows){return(
essenceRows.map(row => {
  let total = 0
  switch(row.LIBELLE) {
    case "Épicéa":            total = 3925; break
    case "Sapin":             total = 3029; break
    case "Hêtre":             total = 857;  break
    case "Feuillus précieux": total = 304;  break
    case "Chêne":             total = 2155; break
    case "Pin maritime":      total = 2831; break
    case "Douglas":           total = 2728; break
    case "Peuplier":          total = 1214; break
  }

  let acc = +row["Produits accidentels"] || 0
  let san = +row["Produits sanitaires"]  || 0

  return {
    essence: row.LIBELLE,
    total: total,
    accidentels: acc,
    sanitaires: san,
    pct_acc:   total > 0 ? (acc / total) * 100 : 0,
    pct_san:   total > 0 ? (san / total) * 100 : 0,
    pct_saine: total > 0 ? 100 - (acc / total * 100) - (san / total * 100) : 100
  }
})
)}

function _40(essenceData){return(
essenceData.sort((a, b) => (b.pct_acc + b.pct_san) - (a.pct_acc + a.pct_san))
)}

function _41(essenceData){return(
essenceData.map(d => ({
  essence: d.essence,
  saine: d.pct_saine.toFixed(1),
  acc: d.pct_acc.toFixed(1),
  san: d.pct_san.toFixed(1),
  somme: (d.pct_saine + d.pct_acc + d.pct_san).toFixed(1)
}))
)}

function _42(Plot,width,essenceData){return(
Plot.plot({
  width: width,
  height: 480,
  marginBottom: 100,
  marginLeft: 60,
  marginTop: 20,

  x: {
    label: "Essence",
    tickRotate: -35,
    tickPadding: 10
  },

  y: {
    label: "% de la récolte 2023",
    percent: true,
    grid: true,
    domain: [0, 100]                    
  },

  color: {
    domain: ["Saine", "Accidentels", "Sanitaires"],
    range: ["#a3d977", "#ffcc80", "#ff6666"],
    legend: true,
    legendPosition: "bottom"
  },

  marks: [
    Plot.barY(
      essenceData.flatMap(d => [
        {essence: d.essence, type: "Saine", value: d.pct_saine/100},
        {essence: d.essence, type: "Accidentels", value: d.pct_acc/100},
        {essence: d.essence, type: "Sanitaires", value: d.pct_san/100}
      ]),
      {
        x: "essence",
        y: "value",
        fill: "type",
        stack: "y",                     // empilage par groupe essence + type
        title: d => `${d.essence} - ${d.type}: ${d.value.toFixed(1)} %`
      }
    )
  ]
})
)}

function _43(md){return(
md`Il présente, pour l'année 2023 et au niveau national (France métropolitaine), la répartition de la récolte de bois par essence principale en trois catégories :

Saine (vert clair) : bois récolté sans problème majeur (ni accident, ni maladie/insecte)
Accidentels (orange clair) : bois issu de coupes accidentelles (tempêtes, chablis, dégâts mécaniques…)
Sanitaires (rouge) : bois issu de coupes sanitaires (attaques d'insectes comme les scolytes, dépérissement lié à la sécheresse, maladies…)

Chaque barre représente 100 % de la récolte de cette essence en 2023. Les essences sont triées de gauche à droite par ordre décroissant de la part « crise » (accidentels + sanitaires cumulés).`
)}

function _statsGlobales(produitsAccidentelsSanitaires,d3)
{
  // 1. Extraire toutes les essences de toutes les catégories
  const toutesLesEssences = Object.values(produitsAccidentelsSanitaires).flat();
  
  // 2. Calculer les moyennes
  const nb = toutesLesEssences.length;
  const moyennes = [
    { label: "Accidentels", valeur: d3.mean(toutesLesEssences, d => d.pct_acc) },
    { label: "Sanitaires", valeur: d3.mean(toutesLesEssences, d => d.pct_san) },
    { label: "Crise", valeur: d3.mean(toutesLesEssences, d => d.pct_crise) }
  ];
  
  return moyennes;
}


function _chartMinimalist(d3,produitsAccidentelsSanitaires){return(
() => {
  
  const width = 600;
  const height = 250;
  const margin = {top: 40, right: 30, bottom: 40, left: 30};

  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; font-family: 'Inter', sans-serif;");

  // Données
  const toutesLesEssences = Object.values(produitsAccidentelsSanitaires).flat();
  const statsGlobales = [
    { label: "Accidentels", valeur: d3.mean(toutesLesEssences, d => d.pct_acc) },
    { label: "Sanitaires", valeur: d3.mean(toutesLesEssences, d => d.pct_san) },
    { label: "Crise", valeur: d3.mean(toutesLesEssences, d => d.pct_crise) }
  ];

  // Échelles
  const x = d3.scaleBand()
      .domain(statsGlobales.map(d => d.label))
      .range([margin.left, width - margin.right])
      .padding(0.4);

  const y = d3.scaleLinear()
      .domain([0, d3.max(statsGlobales, d => d.valeur)]).nice()
      .range([height - margin.bottom, margin.top]);

  // Barres
  svg.append("g")
    .selectAll("rect")
    .data(statsGlobales)
    .join("rect")
      .attr("x", d => x(d.label))
      .attr("y", d => y(d.valeur))
      .attr("height", d => y(0) - y(d.valeur))
      .attr("width", x.bandwidth())
      .attr("fill", (d, i) => ["#3498db", "#e67e22", "#27ae60"][i]) // Couleurs : Bleu, Orange, Vert
      .attr("rx", 4); // Coins légèrement arrondis pour le look

  // Axe X uniquement (sans la ligne de base pour plus de légèreté)
  svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(0).tickPadding(10))
      .call(g => g.select(".domain").remove())
      .style("font-size", "14px")
      .style("color", "#555");

  // Valeurs au-dessus des barres (Remplace l'axe Y)
  svg.append("g")
    .selectAll("text")
    .data(statsGlobales)
    .join("text")
      .attr("x", d => x(d.label) + x.bandwidth() / 2)
      .attr("y", d => y(d.valeur) - 10)
      .attr("text-anchor", "middle")
      .attr("fill", "#2c3e50")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text(d => d.valeur.toFixed(1) + " %");

  return svg.node();
}
)}

function _46(chartMinimalist){return(
chartMinimalist()
)}

function _workbook2(FileAttachment){return(
FileAttachment("Produits_connexes_de_scierie_en_France_métropolitaine_de_2018_à_2023.xlsx").xlsx()
)}

function _48(workbook2){return(
workbook2.sheetNames
)}

function _reponseCriseEvolution(){return(
[
  { 
    annee: 2018, 
    industrie: 2826, 
    energie_comm: 1069, 
    energie_auto: 656,
    total_energie: 1725 
  },
  { 
    annee: 2019, 
    industrie: 2760, 
    energie_comm: 1060, 
    energie_auto: 784,
    total_energie: 1844 
  },
  { 
    annee: 2020, 
    industrie: 2236, 
    energie_comm: 1062, 
    energie_auto: 665,
    total_energie: 1727 
  },
  { 
    annee: 2021, 
    industrie: 2690, 
    energie_comm: 1303, 
    energie_auto: 1162,
    total_energie: 2465 
  },
  { 
    annee: 2022, 
    industrie: 3036, 
    energie_comm: 1788, 
    energie_auto: 1178,
    total_energie: 2966 
  },
  { 
    annee: 2023, 
    industrie: 2259, 
    energie_comm: 1679, 
    energie_auto: 1332,
    total_energie: 3011 
  }
]
)}

function _reponseGraph(d3,reponseCriseEvolution)
{
  const width = 600;
  const height = 400;
  const margin = {top: 40, right: 110, bottom: 40, left: 60};

  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .style("background", "#ffffff")
      .style("font-family", "sans-serif");

  // 1. Échelles
  const x = d3.scaleLinear()
      .domain(d3.extent(reponseCriseEvolution, d => d.annee))
      .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
      .domain([0, 3500]) 
      .range([height - margin.bottom, margin.top]);

  // 2. Générateurs de lignes
  const lineIndustrie = d3.line().x(d => x(d.annee)).y(d => y(d.industrie));
  const lineEnergie = d3.line().x(d => x(d.annee)).y(d => y(d.total_energie));
  const lineAuto = d3.line().x(d => x(d.annee)).y(d => y(d.energie_auto));

  // 3. Axes
  svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(6).tickFormat(d3.format("d")));

  const yAxis = svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

  // Ajout du titre de l'axe Y manuellement
  yAxis.append("text")
      .attr("x", -margin.left)
      .attr("y", margin.top - 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .style("font-weight", "bold")
      .text("↑ Milliers de tonnes");

  // 4. Dessin des courbes
  // INDUSTRIE
  svg.append("path")
      .datum(reponseCriseEvolution)
      .attr("fill", "none")
      .attr("stroke", "#2c3e50")
      .attr("stroke-width", 3)
      .attr("d", lineIndustrie);

  // ÉNERGIE TOTAL
  svg.append("path")
      .datum(reponseCriseEvolution)
      .attr("fill", "none")
      .attr("stroke", "#e67e22")
      .attr("stroke-width", 3)
      .attr("d", lineEnergie);
  
  // AUTOCONSOMMATION (Pointillé)
  svg.append("path")
      .datum(reponseCriseEvolution)
      .attr("fill", "none")
      .attr("stroke", "#e67e22")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", "4,4")
      .attr("d", lineAuto);

  // 5. Annotations de fin de ligne
  const last = reponseCriseEvolution[reponseCriseEvolution.length - 1];
  
  const labels = [
    { y: y(last.industrie), text: "Industrie", color: "#2c3e50", size: "12px" },
    { y: y(last.total_energie), text: "Énergie", color: "#e67e22", size: "12px" },
    { y: y(last.energie_auto), text: "Auto-conso", color: "#e67e22", size: "10px" }
  ];

  labels.forEach(l => {
    svg.append("text")
      .attr("x", x(last.annee) + 5)
      .attr("y", l.y + 4)
      .text(l.text)
      .style("fill", l.color)
      .style("font-size", l.size)
      .style("font-weight", l.text === "Auto-conso" ? "normal" : "bold");
  });

  return svg.node();
}


function _ratioData(entreprisesData,regionData)
{
  // On crée un dictionnaire pour un accès rapide
  const entLookup = new Map(entreprisesData.map(d => [d.nom, d.activiteExploitation]));
  
  return regionData.map(d => {
    const nbEnt = entLookup.get(d.nom) || 1; // Évite la division par zéro
    return {
      nom: d.nom,
      ratio: d.value / nbEnt // Volume par entreprise
    };
  });
}


function _52(md){return(
md`Cette carte ne représente pas la crise elle-même, mais l'outil logistique utilisé pour l'affronter.

Un ratio élevé = une réponse par la concentration et la vitesse (modèle industriel).

Un ratio faible = une réponse par la proximité et le maillage (modèle artisanal).

C'est donc bien la visualisation de la structure de combat de la filière bois face aux aléas climatiques et sanitaires de 2023. 
(ça va très bien avec le bois énergie)`
)}

async function _laMapRatio(html,d3,entreprisesData,regionData)
{
  const width = 900
  const height = Math.min(720, width * 0.72)
  const node = html`<div style="position:relative"></div>`

  // --- GeoJSON France ---
  const franceRegions = await d3.json(
    "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions-version-simplifiee.geojson"
  )

  // --- Préparation des données (Jointure) ---
  const entLookup = new Map(entreprisesData.map(d => [d.nom, d.activiteExploitation]));
  const ratioDataJoined = regionData.map(d => {
    const nbEnt = entLookup.get(d.nom) || 1;
    return { ...d, ratio: d.value / nbEnt };
  });
  const dataMap = new Map(ratioDataJoined.map(d => [d.nom, d]));

  const svg = d3.select(node)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#f8f9fa")
    .style("font-family", "system-ui, sans-serif")

  // --- Projection adaptative ---
  const projection = d3.geoMercator()
    .fitExtent([[15, 15], [width - 15, height - 15]], franceRegions)
  const path = d3.geoPath().projection(projection)

  // --- Échelle de couleurs (Violet pour le ratio) ---
  const maxRatio = d3.max(ratioDataJoined, d => d.ratio) || 1
  const colorScale = d3.scaleSequential()
    .domain([0, maxRatio])
    .interpolator(d3.interpolateYlOrRd)

  // --- Tooltip ---
  const tooltip = d3.select(node)
    .append("div")
    .style("position", "absolute")
    .style("background", "rgba(255, 255, 255, 0.95)")
    .style("padding", "10px")
    .style("border", "1px solid #333")
    .style("border-radius", "4px")
    .style("pointer-events", "none")
    .style("font-size", "12px")
    .style("box-shadow", "0 2px 5px rgba(0,0,0,0.2)")
    .style("opacity", 0)

  // --- Dessin des régions ---
  svg.selectAll("path")
    .data(franceRegions.features)
    .join("path")
    .attr("d", path)
    .attr("fill", d => {
      const reg = dataMap.get(d.properties.nom)
      return reg ? colorScale(reg.ratio) : "#e0e0e0"
    })
    .attr("stroke", "#333")
    .attr("stroke-width", 0.8)
    .on("mouseover", (event, d) => {
      const reg = dataMap.get(d.properties.nom)
      const ent = entLookup.get(d.properties.nom) || 0;
      if (!reg) return

      let content = `<strong>${reg.nom}</strong><br/>
                     <span style="color:#6a1b9a; font-weight:bold">Ratio : ${reg.ratio.toFixed(1)} m³/entreprise</span><br/>
                     <hr style="margin:5px 0">
                     Volume total : ${reg.value.toLocaleString("fr-FR")} m³<br/>
                     Entreprises actives : ${ent}`

      tooltip.html(content).style("opacity", 1)
    })
    .on("mousemove", (event) => {
      tooltip
        .style("left", (event.offsetX + 15) + "px")
        .style("top", (event.offsetY + 15) + "px")
    })
    .on("mouseout", () => tooltip.style("opacity", 0))

  // --- Labels des régions ---
  svg.selectAll("text")
    .data(franceRegions.features)
    .join("text")
    .attr("transform", d => {
      const [x, y] = path.centroid(d)
      return `translate(${x}, ${y})`
    })
    .attr("text-anchor", "middle")
    .attr("dy", 4)
    .style("font-size", "10px")
    .style("font-weight", "bold")
    .style("fill", "#000")
    .style("stroke", "#fff")
    .style("stroke-width", 3)
    .style("paint-order", "stroke")
    .text(d => d.properties.nom.replace(/-/g, " "))

  // --- Légende ---
  const legendWidth = 200
  const legendSvg = d3.select(node)
    .append("svg")
    .attr("width", legendWidth + 100)
    .attr("height", 60)
    .style("position", "absolute")
    .style("bottom", "20px")
    .style("left", "20px")

  legendSvg.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .text("Productivité (m³ récoltés / entreprise)")
    .style("font-size", "11px")
    .style("font-weight", "bold")

  const defs = legendSvg.append("defs")
  const gradientId = "gradient-ratio"
  const linearGradient = defs.append("linearGradient")
    .attr("id", gradientId)
    .attr("x1", "0%").attr("x2", "100%")

  linearGradient.append("stop").attr("offset", "0%").attr("stop-color", d3.interpolateYlOrRd(0))
  linearGradient.append("stop").attr("offset", "100%").attr("stop-color", d3.interpolateYlOrRd(1))

  legendSvg.append("rect")
    .attr("x", 0).attr("y", 25)
    .attr("width", legendWidth).attr("height", 10)
    .style("fill", `url(#${gradientId})`)
    .style("stroke", "#333")

  const legendScale = d3.scaleLinear().domain([0, maxRatio]).range([0, legendWidth])
  const legendAxis = d3.axisBottom(legendScale).ticks(5)

  legendSvg.append("g")
    .attr("transform", `translate(0, 35)`)
    .call(legendAxis)

  return node
}


function _workbook12(FileAttachment){return(
FileAttachment("Production_de_sciages_par_région_de_production_en_2023.xlsx").xlsx()
)}

function _productionSciageData(workbook12){return(
workbook12.sheet(0, { headers: true })
)}

function _modeMap(Inputs){return(
Inputs.select(
  new Map([
    ["Productivité (m³ récoltés / entreprise)", "ratio"],
    ["Production de sciages (m³ de sciages produits)", "sciage"]
  ]),
  {label: "Choisir l'indicateur :", value: "ratio"}
)
)}

async function _laMapDynamique(html,entreprisesData,productionSciageData,regionData,modeMap,d3)
{
  const width = 900;
  const height = Math.min(720, width * 0.72);
  const node = html`<div style="position:relative"></div>`;

  // --- 1. Préparation des données ---
  const entLookup = new Map(entreprisesData.map(d => [d.nom, d.activiteExploitation]));
  // Fonction pour nettoyer les données Agreste (convertit "s" ou "n.d." en 0)
  const cleanAgresteValue = (val) => {
  if (val === "s" || val === "n.d." || val === null) return 0;
  return typeof val === "string" ? +val.replace(/\s/g, "") : val;
};

// Création du Lookup pour le sciage
const sciageLookup = new Map(productionSciageData
  .filter(d => d.Production !== "France") // On ignore la ligne Total France
  .map(d => [
    d.Production, 
    cleanAgresteValue(d["Total essences tempérées"])
  ])
);
 // const sciageLookup = new Map(productionSciageData.map(d => [d.nom, d.value]));
  
  const ratioDataJoined = regionData.map(d => {
    const nbEnt = entLookup.get(d.nom) || 1;
    return { ...d, ratio: d.value / nbEnt };
  });
  const dataMapRatio = new Map(ratioDataJoined.map(d => [d.nom, d]));

  // --- 2. Logique de sélection dynamique ---
  const isRatio = modeMap === "ratio";
  const dataActive = isRatio ? ratioDataJoined : productionSciageData;
  const key = isRatio ? "ratio" : "value";
  const colorInterpolator = isRatio ? d3.interpolateYlOrRd : d3.interpolateGreens;
  const unit = isRatio ? "m³/entreprise" : "m³";

  // Remplace ton maxValue actuel par celui-ci
  const actualMax = isRatio 
    ? d3.max(ratioDataJoined, d => d.ratio) 
    : d3.max(Array.from(sciageLookup.values()));

// On réduit artificiellement le max pour le sciage pour "saturer" plus vite les couleurs
  const maxValue = isRatio ? actualMax : actualMax * 0.8;
  //const maxValue = d3.max(dataActive, d => d[key]) || 1;
  const colorScale = d3.scaleSequential().domain([0, maxValue]).interpolator(colorInterpolator);

  // --- 3. Rendu SVG ---
  const franceRegions = await d3.json("https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions-version-simplifiee.geojson");
  
  const svg = d3.select(node).append("svg")
    .attr("width", width).attr("height", height)
    .style("background", "#f8f9fa").style("font-family", "sans-serif");

  const projection = d3.geoMercator().fitExtent([[15, 15], [width - 15, height - 15]], franceRegions);
  const path = d3.geoPath().projection(projection);

  // --- 4. Tooltip ---
  const tooltip = d3.select(node).append("div")
    .style("position", "absolute").style("background", "white").style("padding", "8px")
    .style("border", "1px solid #333").style("border-radius", "4px").style("opacity", 0);

  // --- 5. Dessin ---
  svg.selectAll("path")
    .data(franceRegions.features)
    .join("path")
    .attr("d", path)
    .attr("fill", d => {
      const nom = d.properties.nom;
      const val = isRatio ? dataMapRatio.get(nom)?.ratio : sciageLookup.get(nom);
      return val ? colorScale(val) : "#eee";
    })
    .attr("stroke", "#333").attr("stroke-width", 0.8)
    .on("mouseover", (event, d) => {
      const nom = d.properties.nom;
      const val = isRatio ? dataMapRatio.get(nom)?.ratio : sciageLookup.get(nom);
      tooltip.html(`<strong>${nom}</strong><br/>${val?.toLocaleString("fr-FR")} ${unit}`).style("opacity", 1);
    })
    .on("mousemove", (event) => {
      tooltip.style("left", (event.offsetX + 15) + "px").style("top", (event.offsetY + 15) + "px");
    })
    .on("mouseout", () => tooltip.style("opacity", 0));

  // Labels des régions
  svg.selectAll("text")
    .data(franceRegions.features)
    .join("text")
    .attr("transform", d => `translate(${path.centroid(d)})`)
    .attr("text-anchor", "middle").style("font-size", "10px").style("font-weight", "bold")
    .text(d => d.properties.nom.replace(/-/g, " "));

  // --- 6. Légende Dynamique ---
  const legendWidth = 200;
  const legendSvg = d3.select(node).append("svg")
    .attr("width", 300).attr("height", 70)
    .style("position", "absolute").style("bottom", "20px").style("left", "20px");

  legendSvg.append("text").attr("y", 12).style("font-size", "11px").style("font-weight", "bold")
    .text(isRatio ? "Productivité (m³/ent.)" : "Production Sciages (m³)");

  const gradId = "main-gradient";
  const defs = legendSvg.append("defs");
  const gradient = defs.append("linearGradient").attr("id", gradId);
  [0, 0.25, 0.5, 0.75, 1].forEach(t => {
    gradient.append("stop").attr("offset", `${t*100}%`).attr("stop-color", colorInterpolator(t));
  });

  legendSvg.append("rect").attr("y", 20).attr("width", legendWidth).attr("height", 12).style("fill", `url(#${gradId})`).style("stroke", "#333");

  const legendScale = d3.scaleLinear().domain([0, maxValue]).range([0, legendWidth]);
  legendSvg.append("g").attr("transform", "translate(0, 32)").call(d3.axisBottom(legendScale).ticks(4).tickFormat(d3.format(".2s")));

  return node;
}


export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["entreprise.csv", {url: new URL("./files/3df4f42dfa0f69f55b9e39b95702101c201b4053c5e8d5bf83cf42917cfe50bb377f793f0439d67b5a380302cf82fa8b200e933e22bc0aa92bd33f1d6234ca4e.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Production_de_sciages_par_région_de_production_en_2023.xlsx", {url: new URL("./files/f9ee4c22060fba04f02df7584aa93d50fb0206bd4e168df025e41adbcd23bf7159d3515d5836011f0ce0929a16e484cd47daf91747e3063b8befdd7c3717dca1.xlsx", import.meta.url), mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", toString}],
    ["Produits_accidentels_en_% - Feuille 1.csv", {url: new URL("./files/144c25394ef4523af5b845941e32e593a623e8cde156681ad160c95687bc4378600ebf95f75fdf74de3bd090d3dc70efd7eadc37a7bbf7152f569a20392a2837.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Produits_accidentels_en_(millier_de_m3_ronds_sur_écorce).xlsx", {url: new URL("./files/f242e43e245725442ae2ab2ac61a961f5d8cf37045d1c54cae85d31bc7ceac38507324a72661538fa86a4c1a0db51a7017aa257456a0aa3de40946bbc7b530df.xlsx", import.meta.url), mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", toString}],
    ["Produits_connexes_de_scierie_en_France_métropolitaine_de_2018_à_2023.xlsx", {url: new URL("./files/71ad6e4c8224ce2592052e810ffe9eb9204bfa47ff4ecfad208ec75365a637185375e95d1828e1bee01ccb7db84d9185a4a6d841e5bb6729eecf37c3a1b4318c.xlsx", import.meta.url), mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", toString}],
    ["Récolte_de_bois_ par_région_de_provenance_en_2023.xlsx", {url: new URL("./files/83ff98de0964474a56f514a2a3f2bdc2c289d30b073dda59922b0bcb009c9550f4e4bf4d5bbf97dc6233cda82314206ac80cd6e2f76bca8dfb891c27c341f5f4.xlsx", import.meta.url), mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", toString}],
    ["Récolte_de_bois.xlsx", {url: new URL("./files/7dc417b5bd69d1f6908e5514aefe12c38e677e14533d5e8c614c9e3a92c67e04859deecd88c962397dbd7830aab48463cb8ac19200e7e33ab5d27d54691455e9.xlsx", import.meta.url), mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", toString}],
    ["prototype.jpeg", {url: new URL("./files/a0ee34a87e69d77740f0350b5543e06e92cc31a19a22ce13597ad2e679e0d57b5a3de84c66164ebc1cc733db87b43718f6ffdac4004d0f2710e5fc81fd1eb732.jpeg", import.meta.url), mimeType: "image/jpeg", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["viewof selection","detailChart","laMap","viewof focusAnalyse","focusAnalyse","detailChart1","reponseGraph","chartMinimalist","viewof modeMap","laMapDynamique","htl"], _4);
  main.variable(observer("prototype")).define("prototype", ["FileAttachment"], _prototype);
  main.variable(observer()).define(["htl"], _6);
  main.variable(observer("workbook")).define("workbook", ["FileAttachment"], _workbook);
  main.variable(observer("viewof focusAnalyse")).define("viewof focusAnalyse", ["Inputs"], _focusAnalyse);
  main.variable(observer("focusAnalyse")).define("focusAnalyse", ["Generators", "viewof focusAnalyse"], (G, _) => G.input(_));
  main.variable(observer("sheet")).define("sheet", ["workbook"], _sheet);
  main.variable(observer("regionData")).define("regionData", ["sheet","selection"], _regionData);
  main.variable(observer("entreprisesData")).define("entreprisesData", ["FileAttachment"], _entreprisesData);
  main.variable(observer("drawRecolteMap")).define("drawRecolteMap", ["d3"], _drawRecolteMap);
  main.variable(observer("drawEntreprisesMap")).define("drawEntreprisesMap", ["d3"], _drawEntreprisesMap);
  main.variable(observer("Type_of_View")).define("Type_of_View", ["Inputs"], _Type_of_View);
  main.variable(observer("Categorie_Recolte")).define("Categorie_Recolte", ["Inputs"], _Categorie_Recolte);
  main.variable(observer()).define(["Type_of_View"], _16);
  main.variable(observer("laMap1")).define("laMap1", ["html","Type_of_View","drawRecolteMap","regionData","Categorie_Recolte","drawEntreprisesMap","entreprisesData"], _laMap1);
  main.variable(observer("chartConfig")).define("chartConfig", ["focusAnalyse"], _chartConfig);
  main.variable(observer("RecolteWorkbook")).define("RecolteWorkbook", ["FileAttachment"], _RecolteWorkbook);
  main.variable(observer("sheet2")).define("sheet2", ["RecolteWorkbook"], _sheet2);
  main.variable(observer("categories")).define("categories", _categories);
  main.variable(observer("detailBoisOeuvre")).define("detailBoisOeuvre", _detailBoisOeuvre);
  main.variable(observer("detailBoisIndustrie")).define("detailBoisIndustrie", _detailBoisIndustrie);
  main.variable(observer("detailBoisEnergie")).define("detailBoisEnergie", _detailBoisEnergie);
  main.variable(observer("categoriesDetails")).define("categoriesDetails", ["detailBoisOeuvre","detailBoisIndustrie","detailBoisEnergie"], _categoriesDetails);
  main.variable(observer("macroData")).define("macroData", ["sheet2","categories"], _macroData);
  main.variable(observer("longMacro")).define("longMacro", ["macroData"], _longMacro);
  main.variable(observer("viewof selection")).define("viewof selection", ["html","localStorage","d3","longMacro"], _selection);
  main.variable(observer("selection")).define("selection", ["Generators", "viewof selection"], (G, _) => G.input(_));
  main.variable(observer("detailChart")).define("detailChart", ["categoriesDetails","selection","html","d3"], _detailChart);
  main.variable(observer("produits_accidentels_en_Feuille1")).define("produits_accidentels_en_Feuille1", ["__query","FileAttachment","invalidation"], _produits_accidentels_en_Feuille1);
  main.variable(observer("produitsAccidentelsSanitaires")).define("produitsAccidentelsSanitaires", _produitsAccidentelsSanitaires);
  main.variable(observer("detailChart1")).define("detailChart1", ["produitsAccidentelsSanitaires","selection","html","d3"], _detailChart1);
  main.variable(observer("laMap")).define("laMap", ["html","d3","regionData","selection"], _laMap);
  main.variable(observer()).define(["md"], _34);
  main.variable(observer("viewof selectedRegion")).define("viewof selectedRegion", ["Inputs","regionData"], _selectedRegion);
  main.variable(observer("selectedRegion")).define("selectedRegion", ["Generators", "viewof selectedRegion"], (G, _) => G.input(_));
  main.variable(observer("accidentalsWorkbook")).define("accidentalsWorkbook", ["FileAttachment"], _accidentalsWorkbook);
  main.variable(observer("sheet1")).define("sheet1", ["accidentalsWorkbook"], _sheet1);
  main.variable(observer("essenceRows")).define("essenceRows", ["sheet1"], _essenceRows);
  main.variable(observer("essenceData")).define("essenceData", ["essenceRows"], _essenceData);
  main.variable(observer()).define(["essenceData"], _40);
  main.variable(observer()).define(["essenceData"], _41);
  main.variable(observer()).define(["Plot","width","essenceData"], _42);
  main.variable(observer()).define(["md"], _43);
  main.variable(observer("statsGlobales")).define("statsGlobales", ["produitsAccidentelsSanitaires","d3"], _statsGlobales);
  main.variable(observer("chartMinimalist")).define("chartMinimalist", ["d3","produitsAccidentelsSanitaires"], _chartMinimalist);
  main.variable(observer()).define(["chartMinimalist"], _46);
  main.variable(observer("workbook2")).define("workbook2", ["FileAttachment"], _workbook2);
  main.variable(observer()).define(["workbook2"], _48);
  main.variable(observer("reponseCriseEvolution")).define("reponseCriseEvolution", _reponseCriseEvolution);
  main.variable(observer("reponseGraph")).define("reponseGraph", ["d3","reponseCriseEvolution"], _reponseGraph);
  main.variable(observer("ratioData")).define("ratioData", ["entreprisesData","regionData"], _ratioData);
  main.variable(observer()).define(["md"], _52);
  main.variable(observer("laMapRatio")).define("laMapRatio", ["html","d3","entreprisesData","regionData"], _laMapRatio);
  main.variable(observer("workbook12")).define("workbook12", ["FileAttachment"], _workbook12);
  main.variable(observer("productionSciageData")).define("productionSciageData", ["workbook12"], _productionSciageData);
  main.variable(observer("viewof modeMap")).define("viewof modeMap", ["Inputs"], _modeMap);
  main.variable(observer("modeMap")).define("modeMap", ["Generators", "viewof modeMap"], (G, _) => G.input(_));
  main.variable(observer("laMapDynamique")).define("laMapDynamique", ["html","entreprisesData","productionSciageData","regionData","modeMap","d3"], _laMapDynamique);
  return main;
}

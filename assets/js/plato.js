// Code logic:
// Node and FilterTag arrays are generated from data
// A search variable stores search state
// node and filtertag states are updated on search change by user (click on a FilterTag)

// Globals
const htmlNode = document.getElementsByTagName("html")[0]
const labosNode = document.getElementById("filters-labo")
const categoriesNode = document.getElementById("filters-category")
const authorsNode = document.getElementById("filters-author")
const searchNode = document.getElementById("search")
const searchInfoNode = document.getElementById("search-info").getElementsByTagName("p")[0]
const bottomItemsNode = document.getElementById("bottom-items")
const filtersNavOnNode = document.querySelector("#filters-nav h3")
const filtersNavOffNode = document.querySelector("#exit-nav h3")

const breakpoint = 550 //px
let colorMode = "light" // "dark"
let saturatedColors = true // true // false

let mode // 'desktop' || 'mobile'
let w, h
let configureCanvas = (ctx, width, height) => {
  ctx.canvas.width = width * window.devicePixelRatio
  ctx.canvas.height = height * window.devicePixelRatio
  ctx.canvas.style.width = width + "px"
  ctx.canvas.style.height = height + "px"
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  ctx.lineWidth = 1
  ctx.lineCap = "round"
  ctx.font = "16px Raleway"
  ctx.textAlign = "center"
}
let animation
let dist = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}
class Particle {
  x;
  y;
  r;
  lifetime;
  age;
  kill;
  color;

  constructor(x = w / 2, y = h / 2, r = 1, color = "black", lifetime = 300) {
    this.x = x
    this.y = y
    this.r = r
    this.lifetime = lifetime
    this.age = 0
    this.kill = false
    this.color = color
  }
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
  }
}

const dataUrl = "http://localhost/platomo/contributions.json"
//const dataUrl = "http://platomo.test/contributions.json"

let data = []
let nodesPop = 0

async function fetchData() {
  try {
    const response = await fetch(dataUrl)
    const json = await response.json()
    data = json.data // Assuming the structure based on your JSON

    addIdsToData() // Process data for IDs

    nodesPop = data.length

    initFilters() // Initialize filter tags based on the new data
    initNodes() // Initialize nodes based on the new data
    fullReset() // Now that data is fetched, reset/init everything
  } catch (error) {
    console.error("Error when fetching data: ", error)
  }
}

let labos, categories, authors
let addIdsToData = () => {
  // Identify all occurrences of labo, category and author
  labos = []
  categories = []
  authors = []
  let isInArray = (el, arr) => arr.some((n) => n === el)

  data.forEach((d) => {
    console.log(d)
    let laboName = d.labos[0]
    let authorName = d.author

    if (laboName && !isInArray(laboName, labos)) labos.push(laboName)
    d.categories.forEach((c) => {
      if (c && !isInArray(c, categories)) categories.push(c)
    })

    if (authorName && !isInArray(authorName, authors)) authors.push(authorName)
  })

  console.log("Labos: ", labos)
  console.log("Categories: ", categories)
  console.log("Authors: ", authors)
  console.log("Data: ", data)

  // Add ids by checking index in arrays
  data.forEach((d) => {
    d.laboId = 1 + labos.indexOf(d.labo)
    d.categoryIds = []
    d.categoryIds = d.categories.map((c) => 1 + categories.indexOf(c))
    d.authorId = 1 + authors.indexOf(d.author)
  })
}

fetchData()

// Filters
let search = {}
let filterTags = []
class FilterTag {
  type;
  id;
  content;
  domNode;
  isActive;

  constructor(type = "labo", id = 1, content = "") {
    this.type = type
    this.id = id
    this.content = content
    this.inject()
    this.setActive(false)
  }

  inject() {
    // Create node
    let liNode = document.createElement("li")
    liNode.classList.add("round-btn")
    liNode.setAttribute("data-tag", this.id)
    //liNode.innerHTML = this.content
    this.domNode = liNode

    // Listeners
    let filterText =
      this.type == "labo" ? "Laboratoire : " : this.type == "category" ? "Catégorie : " : "Auteur·e : "
    liNode.addEventListener("pointerenter", (e) => {
      //updateSearchInfo(e.target.innerHTML, false)
    })
    liNode.addEventListener("pointerleave", (e) => {
      //updateSearchInfo("", false)
    })
    liNode.addEventListener("click", (e) => {
      console.log("click", e.target.innerHTML)
      let newText = this.isActive ? "" : filterText + e.target.innerHTML
      updateSearchInfo(newText, true)
      updateSearch(this.type, this.id)
    })

    // Append
    if (mode == "desktop") {
      let parentNode =
        this.type == "labo"
          ? labosNode
          : this.type == "category"
          ? categoriesNode
          : authorsNode
      parentNode.append(liNode)
    } else if (mode == "mobile") {
      mobileFiltersNode.append(liNode)
    }
  }

  setActive(isActive) {
    this.isActive = isActive
    this.domNode.classList.toggle("active", isActive)
  }

  updateActive() {
    this.setActive(false)
    let isLabo = search.labo && this.type == "labo" && this.id == search.labo
    let isCategory =
      search.category && this.type == "category" && this.id == search.category
    let isAuthor =
      search.author && this.type == "author" && this.id == search.author
    let isActive = isLabo || isCategory || isAuthor
    if (isActive) this.setActive(true)
  }
}

let isSearchActive = () => {
  return !!(search.labo || search.category || search.author)
}

let selectedSearchInfo = ""
let updateSearchInfo = (info = "", save = false) => {
  // save is true if info remains displayed on mouseout

  if (info == "" && !save) {
    searchInfoNode.innerHTML = selectedSearchInfo
  } else {
    searchInfoNode.innerHTML = info
  }

  if (save) selectedSearchInfo = info
}

let updateSearchStatus = () => {
  // Adds .active classes if applicable
  searchNode.classList.toggle("active", isSearchActive())
  document
    .querySelector(".filter[data-filter=labo]")
    .classList.toggle("active", !!search.labo)
  document
    .querySelector(".filter[data-filter=category]")
    .classList.toggle("active", !!search.category)
  document
    .querySelector(".filter[data-filter=author]")
    .classList.toggle("active", !!search.author)
}

let toggleMobileSearch = () => {
  searchNode.classList.toggle("expanded")
}

let initMobileSearchToggle = () => {
  document
    .getElementById("expand-search")
    .removeEventListener("click", toggleMobileSearch)
  document
    .getElementById("expand-search")
    .addEventListener("click", toggleMobileSearch)
}

let initFilters = () => {
  // Create and inject filter tags
  filterTags = []
  //labosNode.innerHTML = ""
  //categoriesNode.innerHTML = ""
  //authorsNode.innerHTML = ""

  // Labo tags
  labos.forEach((l, i) => {
    filterTags.push(new FilterTag("labo", i + 1, l))
  })
  // Category tags
  categories.forEach((c, i) => {
    filterTags.push(new FilterTag("category", i + 1, c))
  })
  // Author tags
  authors.forEach((a, i) => {
    filterTags.push(new FilterTag("author", i + 1, a))
  })

  // Search UI toggle (mobile)
  initMobileSearchToggle()

  // Search activation status
  updateSearchStatus()

  // Search info text
  updateSearchInfo("", true)
}

let updateSearch = (type, id) => {
  // Update search state and update all Node and FilterTag objects
  search.labo =
    type == "labo" ? (id == search.labo ? undefined : id) : undefined
  search.category =
    type == "category" ? (id == search.category ? undefined : id) : undefined
  search.author =
    type == "author" ? (id == search.author ? undefined : id) : undefined

  // Update active nodes
  nodes.forEach((n) => n.updateActive())

  // Update active filter tags
  filterTags.forEach((t) => t.updateActive())

  // Update active filter (UI)
  updateSearchStatus()

  // Clear front layer and add semi-transparent layer if new active filter
  resetFrontLayer()
  if (isSearchActive()) {
    ctx2.fillStyle =
      colorMode == "light" ? "rgba(255, 255, 255, .5)" : "rgba(0, 0, 12, .75)"
    ctx2.fillRect(0, 0, w, h)
  }
}

// Back layer
const can1 = document.getElementById("back-layer")
const ctx1 = can1.getContext("2d")
let stepCount1 = 0
let maxStep1 = 500
let particles1 = []

// Front layer
const can2 = document.getElementById("front-layer")
const ctx2 = can2.getContext("2d")
let stepCount2 = 0
let maxStep2 = 800
let particles2 = []

// Nodes (contributions)
const nodesContainer = document.getElementById("nodes-container")
let nodes = []
class Node {
  x;
  y;
  size;
  data;
  domNode;

  constructor(x = w / 2, y = h / 2, data = {}) {
    this.x = x
    this.y = y
    this.size = 10
    this.active = true
    this.data = data
  }

  inject() {
    // DOM way
    let pNode = document.createElement("p")
    pNode.classList = "node"
    // add url
    if (this.data.url) {
      let aNode = document.createElement("a")
      aNode.href = this.data.url
      aNode.innerHTML = this.data.title
      aNode.dataset.swup = "data-swup-transition"
      pNode.append(aNode)
    } else {
      pNode.innerHTML = this.data.title
    }
    let wid = 120
    pNode.style.width = wid + "px"
    pNode.style.left = this.x - wid / 2 + "px"
    nodesContainer.append(pNode)
    let hei = pNode.clientHeight
    pNode.style.top = this.y - hei / 2 + "px"
    this.domNode = pNode
  }

  updateActive() {
    // Set active status based on search state
    let isActive = true

    // Check labo
    if (search.labo && search.labo != this.data.laboId) isActive = false

    // Ensure categoryIds is an array before filtering
    if (Array.isArray(this.data.categoryIds)) {
      // Check categories
      let matchCount = this.data.categoryIds.filter((cId) => {
        return cId == search.category
      }).length
      if (search.category && matchCount == 0) isActive = false
    } else {
      // If categoryIds is not an array, consider how you want to handle this case.
      // For example, you might want to treat it as if no categories matched:
      if (search.category) isActive = false
    }

    // Check author
    if (search.author && search.author != this.data.authorId) isActive = false

    this.active = isActive

    // Update DOM class
    this.domNode.classList.toggle("active", isActive)
  }
}

let initNodes = () => {
  // Desktop nodes will randomly use all available space
  // Mobile will stack nodes in a structured way

  let nodesPop = data.length

  nodes = []
  nodesContainer.innerHTML = ""

  if (mode == "desktop") {
    // Generate, but not to close to each other
    let maxIterations = 2500, i = 0
    let minDist = 120, maxDist = 290
    let xMargin = 140, yMargin = 240

    // Position first node at center
    let x0 = w / 2,
      y0 = h / 2,
      data0 = data[0]
    nodes.push(new Node(w / 2, h / 2, data0))

    // Position all other nodes
    while (nodes.length < nodesPop && ++i < maxIterations) {
      let x = xMargin + (w - 2 * xMargin) * Math.random()
      let y = yMargin + (h - 2 * yMargin) * Math.random()
      let keep = true
      let minOfDists = 9999

      nodes.forEach((n) => {
        let distToN = dist(n.x, n.y, x, y)
        if (distToN < minDist) {
          keep = false
        }
        minOfDists = Math.min(minOfDists, distToN)
      })

      if (minOfDists > maxDist) keep = false

      if (keep) {
        nodes.push(new Node(x, y, data[nodes.length]))
      }
    }

    console.log(
      nodes.length +
        " nodes generated within " +
        i +
        " iterations in initNodes()."
    )
  } else if (mode == "mobile") {
    let nodeYdist = 100
    for (let i = 0; i < nodesPop; i++) {
      let x = (w / 3) * (1 + (i % 2))
      let y = 30 + nodeYdist * (i + 1)
      nodes.push(new Node(x, y, data[nodes.length]))
    }
  }

  // Generate
  nodes.forEach((n) => {
    n.inject()
    n.updateActive()
  })
}

// Loop
let step = () => {
  let ctx, particles, selectedNodes

  // Draw on back or front layer based on filter selection
  let shouldDraw =
    (!isSearchActive() && stepCount1 < maxStep1) ||
    (isSearchActive() && stepCount2 < maxStep2)

  if (shouldDraw) {
    // Assign ctx, particles and selectedNodes based on filter selection
    if (!isSearchActive()) {
      stepCount1++
      ctx = ctx1 // Back layer
      particles = particles1
      selectedNodes = nodes // All nodes
    } else {
      stepCount2++
      ctx = ctx2 // Front layer
      particles = particles2
      selectedNodes = nodes.filter((n) => n.active) // Only active nodes
    }

    // Inject a new particle each step
    let particlesPerStep = 1
    if (selectedNodes.length >= 1) {
      for (let i = 0; i < particlesPerStep; i++) {
        let randomNodeIndex = Math.floor(selectedNodes.length * Math.random())
        let rn = selectedNodes[randomNodeIndex]
        let randomAngle = 2 * Math.PI * Math.random()
        let r = 90 + rn.size * Math.random()

        // Spawn around nodes
        let x = rn.x + r * Math.cos(randomAngle)
        let y = rn.y + r * Math.sin(randomAngle)

        let hue = colorMode == "light" ? 190 : 0
        let sat = saturatedColors ? 100 : 0
        let lum
        if (colorMode == "light" && saturatedColors) lum = 78
        else if (colorMode == "dark" && saturatedColors) lum = 55
        else if (colorMode == "light" && !saturatedColors) lum = 70 + Math.random() * 30
        else if (colorMode == "dark" && !saturatedColors) lum = 0 + Math.random() * 50
        else {
          console.error("Theme configuration not recognized in plato.js")
        }

        let color = `hsla(${hue + 30 * Math.random()}, ${sat}%, ${lum}%, 0.8)`
        let particle = new Particle(x, y, .5, color)

        if (rn.active) particles.push(particle)
      }
    }

    particles.forEach((p) => {
      selectedNodes.forEach((n) => {
        // Rotation
        let d = dist(p.x, p.y, n.x, n.y)
        let dy = n.y - p.y
        let dx = n.x - p.x
        let angleToNode = Math.atan(dy / dx)
        if (dx < 0) angleToNode += Math.PI

        let span = 113
        let vel = (-4 / span) * Math.max(0, Math.min(d, span - d))
        let angle = angleToNode + Math.PI / 2

        p.x += vel * Math.cos(angle)
        p.y += vel * Math.sin(angle)

        // Push
        let dn = dist(p.x, p.y, n.x, n.y)
        let push = 5 * Math.exp(-dn / (n.size / 10))
        p.x += push * (p.x - n.x)
        p.y += push * (p.y - n.y)
      })

      // Draw
      p.draw(ctx)

      // Age
      p.age++
      if (p.age > p.lifetime) p.kill = true
    })

    // Kill all marked particles
    particles = particles.filter((p) => {
      return !p.kill
    })
  }

  // Next (animation always running)
  window.requestAnimationFrame(step)
}

let resetBackLayer = () => {
  stepCount1 = 0
  particles1 = []
  ctx1.fillStyle = colorMode == "light" ? "white" : "rgb(0, 0, 12)"
  ctx1.fillRect(0, 0, w, h)
}

let resetFrontLayer = () => {
  stepCount2 = 0
  particles2 = []
  ctx2.clearRect(0, 0, w, h)
}

let fullReset = () => {
  // Reset search
  search = {
    labo: undefined,
    category: undefined,
    author: undefined,
  }

  // Reset page dimensions and layers
  w = window.innerWidth
  mode = w < breakpoint ? "mobile" : "desktop"
  h = mode == "desktop" ? window.innerHeight : 2 * 30 + (nodesPop + 1) * 100 // 30px as top&bottom margin
  configureCanvas(ctx1, w, h)
  configureCanvas(ctx2, w, h)
  resetBackLayer()
  resetFrontLayer()

  // Reset nodes (position and content)
  initNodes()
}

// Boot
// fullReset()
window.requestAnimationFrame(step)

// Dark mode
document.getElementById("dark-mode-toggle").addEventListener("click", (e) => {
  htmlNode.classList.toggle("dark-mode")
  colorMode = colorMode == "light" ? "dark" : "light"
  fullReset()
})

// Bottom items interactions
bottomItemsNode.classList = "search-toggle-off"
filtersNavOnNode.addEventListener("click", () => {
  bottomItemsNode.classList = "search-toggle-on"
})
filtersNavOffNode.addEventListener("click", () => {
  bottomItemsNode.classList = "search-toggle-off"
})

// Window resize
let timeout

window.addEventListener("resize", (e) => {
  clearTimeout(timeout)
  timeout = setTimeout(fullReset, 150)
})

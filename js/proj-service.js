var gProjects = [ 
    {
    id: "mine-sweeper",
    name: "Mine Sweeper",
    title: "...",
    desc: "The good old classic mine sweeper in a very special Doom edition",
    url: "https://evikk.github.io/Mine-Sweeper/",
    github: "https://github.com/Evikk/Mine-Sweeper",
    publishedAt: '21/11/20',
    labels: ["HTML", "CSS", "JavaScript"]
    },
    {
    id: "hamiklat",
    name: "Hamiklat Playlist",
    title: "...",
    desc: "A shared playlist site where you can listen to people's different song choices",
    url: "https://evikk.github.io/hamiklat/playlist-site/",
    github: "https://github.com/Evikk/hamiklat",
    publishedAt: '14/4/20',
    labels: ["HTML", "CSS", "JavaScript"]
    },
    {
    id: "how-much",
    name: "How Much App",
    title: "...",
    desc: "A search engine for comparing between Israel prices and Amazon/Ali Express",
    url: "https://apphowmuch.herokuapp.com/",
    github: "https://github.com/Evikk/howmuch",
    publishedAt: '16/6/20',
    labels: ["Python", "TailWind CSS", "Selenium"]
    },
    {
    id: "book-store",
    name: "Book store App",
    title: "...",
    desc: "App for keeping and managing books in book store",
    url: "#",
    github: "https://github.com/Evikk",
    publishedAt: '',
    labels: ["HTML", "CSS", "JavaScript"]
    }

]

function getProjectById(id) {
    return gProjects.find(function(project){
        return project.id === id
    })
}

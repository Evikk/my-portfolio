function initPage(){
    
    var strHtmls = gProjects.map(function(project){
    return `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="openModal('${project.id}')">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
              <i class="fa fa-info-circle fa-5x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${project.id}-thumb.png" alt="">
            </a>
            <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.desc}</p>
            <div class="labels">
                <span class="badge badge-warning">${project.labels[0]}</span>
                <span class="badge badge-primary">${project.labels[1]}</span>
                <span class="badge badge-success">${project.labels[2]}</span>
            </div>
            <a href="${project.url}"><button class="btn btn-outline-warning link-btn">Project Link</button></a>
            <a href="${project.github}"><button class="btn btn-outline-warning link-btn">GitHub Link</button></a>
          </div>
        </div>`
    })

    $('.project-container').html(strHtmls.join(''))
}

function onUserSend(){
    var name = $('input[name="name"]').val()
    var subj = $('input[name="subj"]').val()
    var msg = $('textarea[name="msg"]').val()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=evyatarm@gmail.com&su=${subj}&body=Sender:%20${name}+%0D%0AMessage:%20${msg}`)
    
}

function openModal(id){
    var stackStr = ''
    var project = getProjectById(id)
    project.labels.forEach(function(label){
        stackStr += label+', '
    })
    stackStr = stackStr.substring(0, stackStr.length - 2)
    
    $('.modal-body h2').text(project.name)
    $('.modal-body img').attr("src", `/img/portfolio/${project.id}.png`)
    $('.modal-body p').text(project.desc)
    $('.modal-body .date span').text(project.publishedAt)
    $('.modal-body .stack span').text(stackStr)

}
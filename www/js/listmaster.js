$(document).foundation()


$('.top-bar').on('sticky.zf.stuckto:top', function(){
  $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
  $(this).removeClass('shrink');
})

var megaRoster = {
    init: function(rosterElementSelector) {
        this.rosterElement = document.querySelector(rosterElementSelector);
        this.setupEventListeners();
    },

    setupEventListeners: function() {
        document.querySelector('#studentForm').onsubmit = this.addStudent.bind(this);
    },

    addStudent: function(ev) {
        ev.preventDefault();
        var f = ev.currentTarget;
        var studentName = f.studentName.value;
        var item = this.buildListItem(studentName);
        this.prependChild(this.rosterElement, item);
        f.reset();
        f.studentName.focus();
    },

    prependChild: function(parent, child) {
        parent.insertBefore(child, parent.firstChild);
    },

    buildListItem: function(studentName) {
        var item = document.createElement('li');
        var span = document.createElement('span');
        span.innerText = studentName;
        span.className = 'studentName';
        item.appendChild(span);
        this.appendLinks(item);

        return item;
    },

    promote: function(item) {
        this.prependChild(this.rosterElement, item);
    },

    moveUp: function(item) {
        var previousElement = item.previousElementSibling;
        this.rosterElement.insertBefore(item, previousElement);
    },


    moveDown: function(item) {
        this.moveUp(item.nextElementSibling);
    },

    toggleEditable: function(el) {
        var toggleElement = el.parentElement.querySelector('.toggleEdit');
        if (el.contentEditable === "true") {
            el.contentEditable = "false";
            toggleElement.innerHTML = "edit";
        } else {
            el.contentEditable = "true";
            toggleElement.innerHTML = "update";
            el.focus();
        }
    },

    appendLinks: function(item) {
        var span = document.createElement('span');
        span.className = 'actions';

        var deleteLink = this.buildLink({
            contents: '<i class="fa fa-trash" aria-hidden="true"></i>',
            handler: function(ev) {
                this.rosterElement.removeChild(item);
            }
        });

        var promoteLink = this.buildLink({
            contents: '<i class="fa fa-line-chart" aria-hidden="true"></i>',
            handler: function() {
                this.promote(item);
            }
        });

        var favLink = this.buildLink({
            contents: '<i class="fa fa-star-o" aria-hidden="true"></i>',
            handler: function(ev) {
                item.style.border = '4px #ee4422 solid';
            }
        });


        span.appendChild(deleteLink);
        span.appendChild(promoteLink);
        span.appendChild(favLink);

        span.appendChild(this.buildLink({
            contents: '<i class="fa fa-arrow-up"></i>',
            className: 'up',
            handler: function() {
                if (item !== this.rosterElement.firstElementChild) {
                    this.moveUp(item);
                }
            }
        }));

        span.appendChild(this.buildLink({
            contents: '<i class="fa fa-arrow-down"></i>',
            className: 'down',
            handler: function() {
                if (item !== this.rosterElement.lastElementChild) {
                    this.moveDown(item);
                }
            }
        }));

        span.appendChild(this.buildLink({
            contents: '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>',
            className: 'toggleEdit',
            handler: function() {
                this.toggleEditable(item.querySelector('span.studentName'));
            }
        }));

        item.appendChild(span);
    },

    buildLink: function(options) {
        var link = document.createElement('a');
        link.href = '#';
        link.innerHTML = options.contents;
        link.onclick = options.handler.bind(this);
        link.className = options.className;
        return link;
    },
}

megaRoster.init('#studentList');

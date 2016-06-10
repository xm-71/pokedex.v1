//////copy that I messed up
//Still want to use add css in final copy from this one 


$(document).foundation();

var megaRoster = {
    init: function() {
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
        var list = document.querySelector('#studentList');
        this.prependChild(list, item);
        f.reset();
        f.studentName.focus();
    },

    prependChild: function(parent, child) {
        parent.insertBefore(child, parent.firstChild);
    },

    buildListItem: function(studentName) {
        var item = document.createElement('li');
        item.innerText = studentName;

        // BEGIN things to move to a separate function
        var deleteLink = this.buildLink({
            text: 'remove',
            handler: function(ev) {
                var list = item.parentElement;
                list.removeChild(item);
            }
        });

        var promoteLink = this.buildLink({
            text: 'promote',
            handler: function(ev) {
                item.style.border = '2px CornflowerBlue dashed';
            }
        });

        var unPromoteLink = this.buildLink({
            text: 'UnPromote',
            handler: function(ev) {
                item.style.border = '';
            }
        });

        var MoveUpLink = this.buildLink({
            text: 'Move Up',
            handler: function(ev) {
                parent.nextSibling();
            }
        });

        var MoveDownLink = this.buildLink({
            text: 'Move Dow ',
            handler: function(ev) {
                parent.previousSibling();
            }
        });

        item.appendChild(deleteLink);
        item.appendChild(promoteLink);
        item.appendChild(unPromoteLink);
        item.appendChild(MoveUpLink);
        item.appendChild(MoveDownLink);
        // END things to move to a separate function

        return item;
    },

    appendLinks: function(item) {
        // Append the delete and promote links
    },

    buildLink: function(options) {
        var link = document.createElement('a');
        link.href = '#';
        link.innerText = options.text;
        link.onclick = options.handler;
        return link;
    },
};

megaRoster.init();

// taken from javascript route blog post to study over

const appDiv = "app";

let routes = {};
let templates = {};

let template = (name, templateFunction) => {
    return templates[name] = templateFunction;
}

let route = (path, template) => {
    if (typeof template == "function") {
        return routes[path] = template;
    }
    else if (typeof template == "string") {
        return routes[path] = templates[template];
    }
    else {
        return;
    }
};

// Register the templates.
template('template1', () => {
    let myDiv = document.getElementById(appDiv);
    myDiv.innerHTML = "";
    const link1 = createLink('view1', 'Go to view1', '#/view1');
    const link2 = createLink('view2', 'Go to view2', '#/view2');
    myDiv.appendChild(link1);
    return myDiv.appendChild(link2);
});
template('template-view1', () => {
    let myDiv = document.getElementById(appDiv);
    myDiv.innerHTML = "";
    const link1 = createDiv('view1', "<div><h1>This is View 1 </h1><a href='#/'>Go Back to Index</a></div>");
    return myDiv.appendChild(link1);
});
template('template-view2', () => {
    let myDiv = document.getElementById(appDiv);
    myDiv.innerHTML = "";
    const link2 = createDiv('view2', "<div><h1>This is View 2 </h1><a href='#/'>Go Back to Index</a></div>");
    return myDiv.appendChild(link2);
});
// Define the mappings route->template.
route('/', 'template1');
route('/view1', 'template-view1');
route('/view2', 'template-view2');

// Generate DOM tree from a string
let createDiv = (id, xmlString) => {
    let d = document.createElement('div');
    d.id = id;
    d.innerHTML = xmlString;
    return d.firstChild;
};
// Helper function to create a link.
let createLink = (title, text, href) => {
    let a = document.createElement('a');
    let linkText = document.createTextNode(text);
    a.appendChild(linkText);
    a.title = title;
    a.href = href;
    return a;
};

// Give the correspondent route (template) or fail
let resolveRoute = (route) => {
    try {
        return routes[route];
    } catch (error) {
        throw new Error("The route is not defined");
    }
};
// The actual router, get the current URL and generate the corresponding template
let router = (evt) => {
    const url = window.location.hash.slice(1) || "/";
    const routeResolved = resolveRoute(url);
    routeResolved();
};
// For first load or when routes are changed in browser url box.
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
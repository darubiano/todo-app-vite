(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function l(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=l(o);fetch(o.href,n)}})();const C=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
\r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> Pendientes</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <!-- selected -->\r
                <a id="Todos" class="filtro" class="selected" href="#/">♾️Todos</a>\r
            </li>\r
            <li>\r
                <a id="Pendientes" class="filtro" href="#/active">⭕Pendientes</a>\r
            </li>\r
            <li>\r
                <a id="Completados" class="filtro" href="#/completed">✅Completados</a>\r
            </li>\r
        </ul>\r
        <button class="clear-completed">🗑️Borrar✅</button>\r
        <!-- Hidden if no completed items are left ↓ -->\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let y;const L=new Uint8Array(16);function S(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(L)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function P(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:E};function A(e,t,l){if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const i=e.random||(e.rng||S)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){l=l||0;for(let o=0;o<16;++o)t[l+o]=i[o];return t}return P(i)}class u{constructor(t){this.id=A(),this.descripcion=t,this.done=!1,this.createdAt=new Date}}const c={All:"all",Completed:"Completed",Pending:"Pending"},d={todos:[new u("Piedra del alma"),new u("Piedra del infinito"),new u("Piedra del tiempo"),new u("Piedra del poder"),new u("Piedra del campo"),new u("Piedra del realidad")],filter:c.All},k=()=>{T(),console.log(d),console.log("InitStore 🚨")},T=()=>{const e=localStorage.getItem("state");if(!e)return;const{todos:t=[],filter:l=c.All}=JSON.parse(e);d.todos=t,d.filter=l},f=()=>{localStorage.setItem("state",JSON.stringify(d))},I=(e=c.All)=>{switch(e){case c.All:return[...d.todos];case c.Completed:return d.todos.filter(t=>t.done);case c.Pending:return d.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid`)}},U=e=>{if(!e)throw new Error("Description is required");d.todos.push(new u(e)),f()},O=e=>{d.todos=d.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},q=e=>{d.todos=d.todos.filter(t=>t.id!==e),f()},x=()=>{d.todos=d.todos.filter(e=>!e.done),f()},D=(e=c.All)=>{d.filter=e,f()},F=()=>d.filter,a={addTodo:U,deleteCompleted:x,deleteTodo:q,getCurrentFilter:F,getTodos:I,initStore:k,loadStore:T,setFilter:D,toggleTodo:O},M=e=>{if(!e)throw new Error("A TODO object is required");const{done:t,descripcion:l,id:i}=e,o=`
        <div class="view">
            <input class="toggle" type="checkbox" ${t?"checked":""}>
            <label>${l}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",i),e.done&&n.classList.add("completed"),n};let w;const N=e=>{if(w||(w=document.querySelector(e)),!w)throw new Error(`Element ${e} not found`);w.innerHTML=a.getTodos(c.Pending).length};let g;const H=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} not found`);g.innerHTML="",t.forEach(l=>{g.append(M(l))})},h={ClearCompleted:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PedingCountLabel:"#pending-count"},V=e=>{const t=()=>{const s=a.getTodos(a.getCurrentFilter());H(h.TodoList,s),l()},l=()=>{N(h.PedingCountLabel)};(()=>{const s=document.createElement("div");s.innerHTML=C,document.querySelector(e).append(s),t()})();const i=document.querySelector(h.NewTodoInput),o=document.querySelector(h.TodoList),n=document.querySelector(h.ClearCompleted),p=document.querySelectorAll(h.TodoFilters);i.addEventListener("keyup",s=>{s.keyCode===13&&s.target.value.trim().length!==0&&(a.addTodo(s.target.value),t(),s.target.value="")}),o.addEventListener("click",s=>{const m=s.target.closest("[data-id]");a.toggleTodo(m.getAttribute("data-id")),t()}),o.addEventListener("click",s=>{if(s.target.className==="destroy"){const m=s.target.closest("[data-id]").getAttribute("data-id");a.deleteTodo(m),t()}else return}),n.addEventListener("click",()=>{a.deleteCompleted(),t()}),p.forEach(s=>{s.addEventListener("click",m=>{switch(p.forEach(v=>v.classList.remove("selected")),m.target.classList.add("selected"),m.target.getAttribute("id")){case"Todos":a.setFilter(c.All);break;case"Pendientes":a.setFilter(c.Pending);break;case"Completados":a.setFilter(c.Completed);break}t()})})};a.initStore();V("#app");

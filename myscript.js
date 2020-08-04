function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.create = function(){
        if (this.selector.substr(0,1) == ".") {
            let div = document.createElement("div");
            div.className = this.selector.substr(1);
            div.innerHTML = "если строка selector начинается с точки, создаем div с классом";
            document.body.append(div);
            div.style.cssText = `height: 60px;
                                width: 500px;
                                background: yellow;
                                font-size: 22px`;
    
        }else if (this.selector.substr(0,1)=="#") {
            let paragraf = document.createElement("p");
            paragraf.id = this.selector.substr(1);
            paragraf.innerHTML = "если строка selector  начинается с решетки # то создаем параграф с id";
            document.body.append(paragraf);
            paragraf.style.cssText = `height: 400px;
                                    width: 500px;
                                    background: skyblue;
                                    font-size: 36px`
        } 
    }    
};
let block = new DomElement('.block', '200px', '200px', 'red', '32px');
let best = new DomElement('#best', '100px', '500px', 'green', '26px');
let item = new DomElement('.item','100px', '200px', 'blue', '36px');
block.create();
best.create();
item.create();
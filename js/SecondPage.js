class SecondPage {
    constructor() {
        this.button3 = createButton("Lines");
        this.button8 = createButton("Quadilaters");
        this.button17 = createButton("Triangles");
        this.button28 = createButton("Cirlces");
        this.button33 = createButton("Polygons");

    }
    display() {
        this.button3.position(620, 135);
        this.button8.position(620, 175);
        this.button17.position(620, 215);
        this.button28.position(620, 255);
        this.button33.position(620, 295);

        this.button3.mousePressed(()=> {
            textSize(20);
            fill(0);
            strokeWeight(1.5);
            text(" 1) DOT (.)", 120, 150);
            text(" 2) STANDING LINE (|)", 120, 190);
            text(" 3) SLANTING LINE (/)", 120, 230);
            text(" 4) SLEEPING LINE(-)", 120, 270);
        });

        this.button8.mousePressed(()=>{
            textSize(20);
            fill(0);
            strokeWeight(1.5);
            text(" 1) SQUARE", 120, 150);
            text(" 2) RECTANGLE", 120, 190);
            text(" 3) RHOMBUS", 120, 230);
            text(" 4) PARALLELOGRAM", 120, 270);
            text(" 5) TRAPEZIUM", 120, 310);
            text(" 6) KITE", 120, 350);
            text(" 7) CUBE (3D SHAPE)", 120, 390);
            text(" 8) CUBOID (3D SHAPE)", 120, 430);
        });


        this.button17.mousePressed(()=>{
            textSize(20);
            fill(0);
            strokeWeight(1.5);
            text(" 1) TRIANGLES", 120, 150);
            text(" 2) ACUTE ANGLED TRIANGLE", 120, 190);
            text(" 3) RIGHT ANGLED TRIANGLE", 120, 230);
            text(" 4) OBTUSE ANGLED TRIANGLE", 120, 270);
            text(" 5) ISOCELES", 120, 310);
            text(" 6) EQULATERAL", 120, 350);
            text(" 7) SCALENE", 120, 390);
            text(" 8) CONE (3D)", 120, 430);
            text(" 9) PYRAMID (3D)", 120, 470);
            text(" 10) PRISM (3D)", 120, 510);
        });


        this.button28.mousePressed(()=> {
            textSize(20);
            fill(0);
            strokeWeight(1.5);
            text(" 1) CIRCLE", 120, 150);
            text(" 2) OVAL", 120, 190);
            text(" 3) SPHERE", 120, 230);
            text(" 4) CYLINDER", 120, 270);
        });


        this.button33.mousePressed(()=> {
            textSize(20);
            fill(0);
            strokeWeight(1.5);
            text(" 1) PENTAGON", 120, 150);
            text(" 2) HEXAGON", 120, 190);
            text(" 3) HEPTAGON", 120, 230);
            text(" 4) OCTAGON", 120, 270);
            text(" 5) NONAGON", 120, 310);
            text(" 6) DECAGON", 120, 350);
            text(" 7) STAR", 120, 390);
            text(" 8) HEART", 120, 430);
        });
    }
}
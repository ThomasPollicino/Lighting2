class TriangleDraw {
    constructor() {
        this.type = 'triangleDraw';
        this.positions = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
        this.color = [1.0, 1.0, 1.0, 1.0];
        this.size = 5.0;
    }

    render() {
        var rgba = this.color;
        var size = this.size;

        // Pass the color of the triangle to u_FragColor variable
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Pass the size
        gl.uniform1f(u_Size, size);

        drawTriangle(this.positions);
    }
}

function drawTriangle(vertices) {
    var n = 3;
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log("Failed to create the buffer object");
        return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log("Failed to get a_position");
        return -1;
    }

    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);

    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function pictureDrawing() {
    let pictureTriangles = [
        //Backgorund
        { positions: [-1, 1, 1, 1, -1, -1], color: [0.4, 0.4, 0.7, 1.0]},
        { positions: [1, -1, 1, 1, -1, -1], color: [0.4, 0.4, 0.7, 1.0]},

        //Grass
        { positions: [-1, -0.187, 1, -0.187, -1, -1], color: [0.4, 1, 0.3, 1.0]},
        { positions: [1, -1, 1, -0.187, -1, -1], color: [0.4, 1, 0.3, 1.0]},
        
        //River Fix
        { positions: [-0.07, -0.187, 0.2, -0.187, 0.2, -0.4], color: [0.0, 0.2, 1, 1.0]},

        // Mountain
        { positions: [-0.2, -0.55, 1.2, -0.55, 0.5, 0.8], color: [0.4, 0.2, 0.0, 1.0]},

        //Sand
        { positions: [-0.09, -0.187, -0.85, -1, -0.7, -1], color: [0.8, 0.8, 0.7, 1.0]},
        { positions: [-0.09, -0.187, -0.85, -1, -0.015, -0.19], color: [0.8, 0.8, 0.7, 1.0]},

        { positions: [-0.25, -0.55, -0.4, -1, -0.25, -1], color: [0.8, 0.8, 0.7, 1.0]},
        { positions: [-0.25, -0.55, -0.10, -0.55, -0.25, -1], color: [0.8, 0.8, 0.7, 1.0]},

        //River
        { positions: [-0.015, -0.187, -0.8, -1, -0.3, -1], color: [0.0, 0.2, 1, 1.0]},
        { positions: [-0.07, -0.187, -0.8, -1, -0.01, -0.187], color: [0.0, 0.2, 1, 1.0]},

        //Secound Snow
        { positions: [0.24, 0.3, 0.76, 0.3, 0.5, 0.8], color: [0.8, 0.8, 0.8, 1.0]},
        
        // Snow
        { positions: [0.29, 0.4, 0.71, 0.4, 0.5, 0.8], color: [1.0, 1.0, 1.0, 1.0]},
        { positions: [0.29, 0.4, 0.43, 0.4, 0.36, 0.3], color: [1.0, 1.0, 1.0, 1.0]},
        { positions: [0.43, 0.4, 0.57, 0.4, 0.5, 0.3], color: [1.0, 1.0, 1.0, 1.0]},
        { positions: [0.57, 0.4, 0.71, 0.4, 0.64, 0.3], color: [1.0, 1.0, 1.0, 1.0]},
        
        // Tree
        { positions: [-0.65, -0.3, -0.55, -0.3, -0.55, 0.35], color: [0.5, 0.3, 0.2, 1.0]},
        { positions: [-0.65, -0.3, -0.55, 0.35, -0.65, 0.35], color: [0.5, 0.3, 0.2, 1.0]},

        { positions: [-0.60, 0.45, -0.75, 0.2, -0.45, 0.2], color: [0.1, 0.8, 0.5, 1.0]},
        { positions: [-0.60, 0.27, -0.85, -0.1, -0.35, -0.1], color: [0.1, 0.8, 0.5, 1.0]},

        //Bird
        { positions: [-0.25, 0.45, -0.28, 0.47, -0.32, 0.47], color: [0.0, 0.0, 0.0, 1.0]},
        { positions: [-0.25, 0.45, -0.22, 0.47, -0.18, 0.47], color: [0.0, 0.0, 0.0, 1.0]},

        { positions: [-0.15, 0.40, -0.18, 0.42, -0.21, 0.42], color: [0.0, 0.0, 0.0, 1.0]},
        { positions: [-0.15, 0.40, -0.12, 0.42, -0.09, 0.42], color: [0.0, 0.0, 0.0, 1.0]},
        



        
    ];

    g_shapesList = [];

    for (let i = 0; i < pictureTriangles.length; i++) {
        let tri = new TriangleDraw();
        tri.positions = pictureTriangles[i].positions;
        tri.color = pictureTriangles[i].color;
        tri.size = pictureTriangles[i].size;
        g_shapesList.push(tri);
    }

    renderAllShapes();
}
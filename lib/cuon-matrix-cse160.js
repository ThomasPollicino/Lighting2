// cuon-matrix.js (c) 2012 kanda and matsuda
/**
 * This is a class treating 4x4 matrix.
 * This class contains the function that is equivalent to OpenGL matrix stack.
 * The matrix after conversion is calculated by multiplying a conversion matrix from the right.
 * The matrix is replaced by the calculated result.
 */

class Vector {
    constructor(opt_src) {
        var v = new Float32Array(3);
        if (opt_src && typeof opt_src === 'object') {
          v[0] = opt_src[0];
          v[1] = opt_src[1];
          v[2] = opt_src[2];
        }
        this.elements = v;
    }

    /**
     * Copy vector.
     * @param src source vector
     * @return this
     */
    set(src) {
        var i, s, d;

        s = src.elements;
        d = this.elements;

        if (s === d) {
          return;
        }

        for (i = 0; i < 3; ++i) {
          d[i] = s[i];
        }

        return this;
    }

    /**
      * Add other to this vector.
      * @return this
      */
    add(other) {
      
        this.elements[0] += other.elements[0];
        this.elements[1] += other.elements[1];
        this.elements[2] += other.elements[2];

    
        return this;
    };

    /**
      * Subtract other from this vector.
      * @return this
      */
    sub(other) {
      this.elements[0] -= other.elements[0];
      this.elements[1] -= other.elements[1];
      this.elements[2] -= other.elements[2];

        return this;
    };

    /**
      * Divide this vector by a scalar.
      * @return this
      */
    div(scalar) {
        this.elements[0] /= scalar;
        this.elements[1] /= scalar;
        this.elements[2] /= scalar;
        return this;
    };

    /**
      * Multiply this vector by a scalar.
      * @return this
      */
    mul(scalar) {
        this.elements[0] *= scalar;
        this.elements[1] *= scalar;
        this.elements[2] *= scalar;
        return this;
    };

    /**
      * Calcualte the dop product between this vector and other.
      * @return scalar
      */
    static dot(other1, other2) {
        const a1 = other1.elements[0];
        const b1 = other1.elements[1];
        const c1 = other1.elements[2];
    
        const a2 = other2.elements[0];
        const b2 = other2.elements[1];
        const c2 = other2.elements[2];
    
    
        let d = a1 * a2 + b1 * b2 + c1 * c2; 

        return d;
    }

    /**
      * Calcualte the cross product between this vector and other.
      * @return new vector
      */
    static cross(other1, other2) {
        // Insert your code here.
        // This function should create and return a new vector.

        const v1 = other1.elements;
        const v2 = other2.elements;

        const a = v1[1] * v2[2] - v1[2] * v2[1];
        const b = v1[2] * v2[0] - v1[0] * v2[2];
        const c = v1[0] * v2[1] - v1[1] * v2[0];
        let v3 = new Vector3([a, b, c]); // Modify this line to calculate cross product between other1 and other2.

        // Don't delete the return statement.
        return v3;
    }

    /**
      * Calculate the magnitude (or length) of this vector.
      * @return scalar
      */
    magnitude() {
        // Insert your code here.
        const a = this.elements[0];
        const b = this.elements[1];
        const c = this.elements[2];
        let m=Math.sqrt((a*a)+(b*b)+(c*c))
        

        // Don't delete the return statement.
        return m;
    };

    /**
      * Normalize this vector.
      * @return this
      */
    normalize() {
        // Insert your code here.
        // This function should change this vector (this.elements) and not create a new vector.
        const a = this.magnitude();
        if (a !== 0) {
          this.elements[0] /= a;
          this.elements[1] /= a;
          this.elements[2] /= a;
        }
        // Don't delete the return statement.
        return this;
    };
}


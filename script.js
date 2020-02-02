function resolveDiscriminant(a, b, c) {
    if (a == 0)
    console.log("Error, 404 - Not found");
    var D = b * b - 4 * a * c;
    var x1, x2;
    if (D > 0) {
        x1=(-b + Math.sqrt(D)) / (2 * a);
        x2=(-b - Math.sqrt(D)) / (2 * a);
        console.log(`Result is ${x1} and ${x2}`);
    } else if (D == 0) {
        x1 = (-b) / (2 * a);
        console.log('x=' + x1);
    } else if (D < 0) {
        console.log('Решения нет так как дисриминант меньше 0');
    }
    
}
resolveDiscriminant(1, -70, 600);
//retry function


function retry(fn, attempts) {

    for (let i = 1; i <= attempts; i++) {

        try {
            return fn();

        } catch (error) {

            console.log(`Attempt ${i} failed`);

            if (i === attempts) {
                throw error;
            }
        }
    }
}

// Function jise retry karna hai
function test() {
    console.log("Trying...");

    throw new Error("Something went wrong");
}

// Retry function call
try {
    console.log(retry(test, 3));
} catch (error) {
    console.log("All attempts failed");
}
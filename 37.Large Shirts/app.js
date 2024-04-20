//78692
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size}t-shirt with the message "${message}" printed on it.`);
}
//Default large and message
make_shirt();
// Default message ,medium size 
make_shirt("medium");
//custom message, smallsize
make_shirt("small", "Dive into Coding");
export {};

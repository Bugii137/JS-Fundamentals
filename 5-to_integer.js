const arg = Number(process.argv[2]);
if (Number.isNaN(arg)) {
  console.log("Not a number");
} else {
  console.log("My number: " + parseInt(arg));
}

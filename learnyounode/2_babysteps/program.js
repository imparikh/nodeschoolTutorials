sum = 0
/*Number() converts it to an integer*/
for (i = 2; i < process.argv.length; i++){
	sum += Number(process.argv[i])
}
console.log(sum)

function GeneriereZufallsZahl(min, max)
{

	const x = Math.floor(Math.random() * (max - min + 1)) + min;

	return(x);
}	


function generiereZufallsZahlen(anzahl)
{
	const zufallsZahlen = new Array(anzahl);

	for(let i=0; i<anzahl; i++)
	{
		const zufallsZahl = GeneriereZufallsZahl(1, 365.25);
		zufallsZahlen[i]=zufallsZahl
	}

	//console.log(zufallsZahlen);
	return(zufallsZahlen);
}

function geburtstagsParadox (anzahl,versuche)
{
	anzahl = document.getElementById(anzahl).value;
	versuche = document.getElementById(versuche).value;


	const ergebnisse = new Array(versuche).fill(0);
	let mengeGleicheGeburtstage = 0;

	for (let i=0; i<versuche; i++)
	{
		const geburtstage = generiereZufallsZahlen(anzahl);
		let gleicheGeburtstage = false;

		for(let j=0; j<anzahl; j++)
		{
			if(gleicheGeburtstage==false)
			{
				for(let k=j+1; k<anzahl; k++)
				{
					if(geburtstage[j]==geburtstage[k])
					{
						gleicheGeburtstage=true;
						mengeGleicheGeburtstage++;
						break;
					}	
				}
			}
		}
		ergebnisse[i]=gleicheGeburtstage;
	}
	console.log(mengeGleicheGeburtstage);
	
	// console.log(geburtstage);
	// console.log(gleicheGeburtstage);
	console.log(ergebnisse);
	alert("Gleiche Geburtstage: " + mengeGleicheGeburtstage + "\nDas sind:" + (mengeGleicheGeburtstage * 100) / versuche + "%");
}












/*

function geburtstagsParadox (anzahl,versuche)
{
	var ergebnisse = new Array(versuche).fill(0);
	
	for (var i=0;i<versuche;i++)
	{
		var geburtstage = generiereZufallsZahlen(anzahl);
		var gleicheGeburtstage = false
		
		for(var j=0;j<anzahl;j++)
		{
			if(gleicheGeburtstage==false)
			{
				for(var k=j+1;k<anzahl;k++)
				{
					if(geburtstage[j]==geburtstage[k])
					{
						gleicheGeburtstage=true;
					}	
				}
			}
		}
		ergebnisse[i]=gleicheGeburtstage;
	}
	
	console.log(geburtstage);
	console.log(gleicheGeburtstage);
	console.log(ergebnisse);
}


function geburtstagsParadox (anzahl,versuche)
{
	var geburtstage = generiereZufallsZahlen(anzahl);
	var mengeGleicheGeburtstage = 0
	
	var ergebnisse = new Array(versuche).fill(0);
	
	
	
		for(var i=0;i<anzahl;i++)
		{
			for(var k=i+1;k<anzahl;k++)
			{
				if(geburtstage[i]==geburtstage[k])
				{
					mengeGleicheGeburtstage++;
				}
			}
		}
	
	console.log(geburtstage);
	console.log(mengeGleicheGeburtstage);
	console.log(ergebnisse);
}






function generiereDatumMonatTag()
{
	datum = GeneriereZufallsZahl(1,12);
	
	if (datum == 1 || datum == 3 || datum == 5 || datum == 7 || datum == 8 || datum == 10 || datum == 12)
	{
		datum += "," + GeneriereZufallsZahl(1,31);
	}
	else if (datum == 4 || datum == 6 || datum == 9 || datum == 11)
	{
		datum += "," + GeneriereZufallsZahl(1,30);
	}
	else
	{
		datum += "," + GeneriereZufallsZahl(1,28)
	}
	return(datum);
}





	var numbers = new Array(n*max-n*min).fill(0);

	for (i = 1; i<= 100; i++)
	{
		var randomNumber = 0
		
		for(j=0;j<=n;j++)
		{
			randomNumber += GeneriereZufallsZahl(min, max)
		}
	
		numbers[randomNumber] += 1;
	}

	
	console.log(numbers);	


		for (i = 1; i<= 10000; i++)
	{
		var randomNumber = GeneriereZufallsZahl(min, max)+GeneriereZufallsZahl(min, max)

		randomNumber = 0;

		for(i.toExponential.apply.apply.apply.)
		randomNumber += GeneriereZufallsZahl(min, max);
		randomNumber += GeneriereZufallsZahl(min, max);
		numbers[randomNumber] += 1;
	}
	
	console.log(numbers);





	for (i = 1; i<= 10000; i++)
	{
		var randomNumber = GeneriereZufallsZahl(min, max)+GeneriereZufallsZahl(min, max)
		numbers[randomNumber] += 1;
	}
	
	console.log(numbers);



	for (i = 1; i<= 100; i++)
	{
		var randomNumber = 0
		
		for(j=0;j=n;j++)
		{
			randomNumber += GeneriereZufallsZahl(min, max)
		}
	
		numbers[randomNumber] += 1;
	}



	for(i=0;i=n;i++)
	{
		
	}
	
	
	var numbersPercent = [0];
	
	for (var i = min-1; i < numbers.length; i++)
	{
		numbersPercent[i] = (numbers[i]/numberTotal)*100
	}	
	
	
	
	
	
	
	
	
	for (i = 0; i < numbers.length; i++)
	{
		var Percentage = (numbers[i]/numberTotal)*100
		console.log(`${i} - {percentage[i]}%`)
	}
	



function pruefeWahrscheinlichkeit()
{
	var min = 1
	var max = 6
	

	var numbers = [0];
	
	for (var i = 1; i <= max; i++)
	{
		numbers.push(0);
	}	

	var numberTotal = 0;
	
	for (i = 1; i<= 100; i++)
	{
		var randomNumber = GeneriereZufallsZahl(min, max);
		numbers[randomNumber] += 1;
		
		numberTotal +=1;
	}
	
	for (let i = 0; i < numbers.length; i++)
	{
		console.log(`${i} - ${numbers[i]}`)
	}
	
	var numbersPercent = [0]
}



*/
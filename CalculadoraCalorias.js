"use strict";
class CalculadoraCalorias { 
	constructor(){
		this.calculadoraA=new Array();
		this.calculadoraD=new Array();
	}
	IMC(){
		var formula;
		var peso;
		var altura;
		peso=document.getElementById('peso').value;
		altura=document.getElementById('altura').value;
		formula=peso/(altura*altura);
		document.getElementById('result').value=formula;
	}
	caloriasDeporte(valor){
		var calorias;
		if(valor=='n'){
			calorias=149;
		}else if(valor=='y'){
			calorias=120;
		}else if(valor=='a'){
			calorias=223;
		}else if(valor=='c'){
			calorias=167;
		}else if(valor=='e'){
			calorias=335;
		}else if(valor=='q'){
			calorias=149;
		}else if(valor=='b'){
			calorias=167;
		}else if(valor=='t'){
			calorias=242;
		}else if(valor=='f'){
			calorias=260;
		}else if(valor=='i'){
			calorias=298;
		}else if(valor=='x'){
			calorias=400;
		}else if(valor=='k'){
			calorias=372;
		}else if(valor=='l'){
			calorias=446;
		}else if(valor=='v'){
			calorias=112;
		}else if(valor=='z'){
			calorias=93;
		}else if(valor=='r'){
			calorias=186;
		}else if(valor=='g'){
			calorias=223;
		}else if(valor=='y'){
			calorias=186;
		}else if(valor=='w'){
			calorias=133;
		}else if(valor=='p'){
			calorias=260;
		}
		this.calculadoraD.push(calorias);
		document.getElementById('deporte').value=this.imprimeDeportes();
	}
	caloriasAlimentos(valor){
		var calorias;
		if(valor=='a'){
			calorias=135;
		}else if(valor=='b'){
			calorias=29;
		}else if(valor=='p'){
			calorias=22;
		}else if(valor=='r'){
			calorias=40;
		}else if(valor=='c'){
			calorias=44;
		}else if(valor=='o'){
			calorias=646;
		}else if(valor=='m'){
			calorias=40;
		}else if(valor=='l'){
			calorias=90;
		}else if(valor=='n'){
			calorias=660;
		}else if(valor=='i'){
			calorias=581;
		}else if(valor=='e'){
			calorias=620;
		}else if(valor=='t'){
			calorias=199;
		}else if(valor=='x'){
			calorias=665;
		}else if(valor=='h'){
			calorias=468;
		}else if(valor=='y'){
			calorias=134;
		}else if(valor=='w'){
			calorias=181;
		}else if(valor=='f'){
			calorias=57;
		}else if(valor=='v'){
			calorias=172;
		}else if(valor=='z'){
			calorias=118;
		}else if(valor=='u'){
			calorias=175;
		}
		this.calculadoraA.push(calorias);
		document.getElementById('alimentos').value=this.imprimeAlimentos();

	}
	elimina(){
		this.calculadoraA.pop();
		document.getElementById('alimentos').value=this.imprimeAlimentos();
	}
	borrar(){
		while(this.calculadoraA.length!=0){
			this.calculadoraA.pop();
		}
		document.getElementById('alimentos').value=this.imprimeAlimentos();
		document.getElementById('totalAlimentos').value="";
		document.getElementById('total').value="";
	}
	eliminaD(){
		this.calculadoraD.pop();
		document.getElementById('deporte').value=this.imprimeDeportes();
	}
	borrarD(){
		while(this.calculadoraD.length!=0){
			this.calculadoraD.pop();
		}
		document.getElementById('deporte').value=this.imprimeDeportes();
		document.getElementById('totalDeportes').value="";
		document.getElementById('total').value="";
	}
	imprimeAlimentos(){
		var stringPila = "";
        for (var i in this.calculadoraA){
			if(i==0)
				stringPila += this.calculadoraA[i];
			else
				stringPila += "+"+this.calculadoraA[i];
	    }
        return stringPila;
	}
	imprimeDeportes(){
		var stringPila = "";
        for (var i in this.calculadoraD){
			if(i==0)
				stringPila += this.calculadoraD[i];
			else
				stringPila += "+"+this.calculadoraD[i];
	    }
        return stringPila;
	}
	calculaA(){
		var result;
		result=0;
		for (var i in this.calculadoraA){
			 result+=this.calculadoraA[i];
		}
		document.getElementById('alimentos').value=result;
		document.getElementById('totalAlimentos').value=result;
	}
	calculaD(){
		var result;
		result=0;
		for (var i in this.calculadoraD){
			 result+=this.calculadoraD[i];
		}
		document.getElementById('deporte').value=result;
		document.getElementById('totalDeportes').value=result;
	}
	total(){
		document.getElementById('total').value=document.getElementById('totalAlimentos').value-document.getElementById('totalDeportes').value;
	}
}
var calculadoraA=new CalculadoraCalorias();
var calculadoraD=new CalculadoraCalorias();
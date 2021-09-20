// Foydalanuvchi bo'linuvchi va bo'luvchini kiritadi, console ga bo'linma va qoldiqni chiqaramiz

var birinchi = parseFloat(prompt('son'))
var ikkinchi = parseFloat(prompt('bo\'lish'))

var bolingan = birinchi / ikkinchi

var bolinganSon = Math.floor(bolingan)

console.log('qoldiq siz ' + bolinganSon + ' ga teng bo\'ladi')

var qoldiq = bolingan - bolinganSon

console.log('qpldig\'i ' + qoldiq +' ga teng boladi')

console.log(bolingan)
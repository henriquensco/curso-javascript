#OPERADORES RELACIONAIS

- 5 > 2 -> TRUE
- 7 < 4 -> FALSE
- 8 >= 8 -> TRUE
- 9 <= 7 -> FALSE
- 5 == 5 -> TRUE
- 4 != 4 -> FALSE

##IDENTIDADE

5 == 5 -> true
5 == '5' -> true
5 === '5' -> false  verifica se os valores são identicos
5 === 5 -> true
5 !== '5' -> true //desigual restrito *tipos diferentes*

#OPERADORES LÓGICOS
! negação
&& conjunção
|| disjunção

##NEGACAO

! true -> false
! false -> true

##CONJUÇÃO

*Operador binário*

true  && true 
true     false
false    true
false    false

##DISJUNÇÃO

true   ||  true  -> true
true       false -> true
false      true  -> true
false      false -> false


#ORDEM DE PRECEDÊNCIA

() ** / ···

> < >= ···

!
&&
||

#OPERADOR TERNÁRIO

? e :

teste ? true : false

média >= 7.0 ? 'aprovado' : 'reprovado'


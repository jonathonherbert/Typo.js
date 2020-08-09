const aff = `# Affix file for British English MySpell dictionary.
# Also suitable as basis for Commonwealth and European English.
# Built from scratch for MySpell. Released under LGPL.
#
# Sources used to verify the spelling of the words
# Marco Pinto included in the dictionary:
#   1) Oxford Dictionaries;    4) Wiktionary (used with caution);
#   2) Collins Dictionary;     5) Wikipedia (used with caution);
#   3) Macmillan Dictionary;   6) Physical dictionaries.
#
# David Bartlett, Andrew Brown, Kevin Atkinson,
# Áron Budea, Marco A.G.Pinto.
# R 2.42, 2016-11-01

SET UTF-8

TRY esiaénrtolcdugmfphbyvkw-'.zqjxSNRTLCGDMFPHBEAUYOIVKWóöâôZQJXÅçèîêàïüäñ

NOSUGGEST !

# ordinal numbers
COMPOUNDMIN 1
# only in compounds: 1th, 2th, 3th
ONLYINCOMPOUND _
# compound rules:
# 1. [0-9]*1[0-9]th (10th, 11th, 12th, 56714th, etc.)
# 2. [0-9]*[02-9](1st|2nd|3rd|[4-9]th) (21st, 22nd, 123rd, 1234th, etc.)
COMPOUNDRULE 2
COMPOUNDRULE #*0{
COMPOUNDRULE #*@}
WORDCHARS 0123456789’

REP 27
REP f ph
REP ph f
REP f gh
REP f ugh
REP gh f
REP ff ugh
REP uf ough
REP uff ough
REP k ch
REP ch k
REP dg j
REP j dg
REP w ugh
REP ness ity
REP leness ility
REP ness ivity
REP eness ity
REP og ogue
REP ck qu
REP ck que
REP eg e.g.
REP ie i.e.
REP t ght
REP ght t
REP ok OK
REP ts ce
REP ce ts

PFX A Y 2
PFX A 0 re [^e]
PFX A 0 re- e
PFX a Y 1
PFX a 0 mis .
PFX I Y 4
PFX I 0 il l
PFX I 0 ir r
PFX I 0 im [bmp]
PFX I 0 in [^blmpr]
PFX c Y 1
PFX c 0 over .
PFX U Y 1
PFX U 0 un .
PFX C Y 2
PFX C 0 de [^e]
PFX C 0 de- e
PFX E Y 1
PFX E 0 dis .
PFX F Y 5
PFX F 0 com [bmp]
PFX F 0 co [aeiouh]
PFX F 0 cor r
PFX F 0 col l
PFX F 0 con [^abehilmopru].
PFX K Y 1
PFX K 0 pre .
PFX e Y 1
PFX e 0 out .
PFX f Y 2
PFX f 0 under [^r]
PFX f 0 under- r
PFX O Y 1
PFX O 0 non- .
PFX 4 Y 1
PFX 4 0 trans .

SFX V Y 15
SFX V 0 tive [aio]
SFX V b ptive b
SFX V d sive d
SFX V be ptive be
SFX V e tive ce
SFX V de sive de
SFX V ke cative ke
SFX V e ptive me
SFX V e ive [st]e
SFX V e ative [^bcdkmst]e
SFX V 0 lative [aeiou]l
SFX V 0 ative [^aeiou]l
SFX V 0 ive [st]
SFX V y icative y
SFX V 0 ative [^abdeilosty]
SFX v Y 15
SFX v 0 tively [aio]
SFX v b ptively b
SFX v d sively d
SFX v be ptively be
SFX v e tively ce
SFX v de sively de
SFX v ke catively ke
SFX v e ptively me
SFX v e ively [st]e
SFX v e atively [^bcdkmst]e
SFX v 0 latively [aeiou]l
SFX v 0 atively [^aeiou]l
SFX v 0 ively [st]
SFX v y icatively y
SFX v 0 atively [^abdeilosty]
SFX u Y 15
SFX u 0 tiveness [aio]
SFX u b ptiveness b
SFX u d siveness d
SFX u be ptiveness be
SFX u e tiveness ce
SFX u de siveness de
SFX u ke cativeness ke
SFX u e ptiveness me
SFX u e iveness [st]e
SFX u e ativeness [^bcdkmst]e
SFX u 0 lativeness [aeiou]l
SFX u 0 ativeness [^aeiou]l
SFX u 0 iveness [st]
SFX u y icativeness y
SFX u 0 ativeness [^abdeilosty]
SFX N Y 26
SFX N b ption b
SFX N d sion d
SFX N be ption be
SFX N e tion ce
SFX N de sion de
SFX N ke cation ke
SFX N e ption ume
SFX N e mation [^u]me
SFX N e ion [^o]se
SFX N e ition ose
SFX N e ation [iou]te
SFX N e ion [^iou]te
SFX N e ation [^bcdkmst]e
SFX N el ulsion el
SFX N 0 lation [aiou]l
SFX N 0 ation [^aeiou]l
SFX N 0 mation [aeiou]m
SFX N 0 ation [^aeiou]m
SFX N er ration er
SFX N 0 ation [^e]r
SFX N 0 ion [sx]
SFX N t ssion mit
SFX N 0 ion [^m]it
SFX N 0 ation [^i]t
SFX N y ication y
SFX N 0 ation [^bdelmrstxy]
SFX n Y 28
SFX n 0 tion a
SFX n e tion ce
SFX n ke cation ke
SFX n e ation [iou]te
SFX n e ion [^iou]te
SFX n e ation [^ckt]e
SFX n el ulsion el
SFX n 0 lation [aiou]l
SFX n 0 ation [^aeiou]l
SFX n er ration er
SFX n 0 ation [^e]r
SFX n y ation py
SFX n y ication [^p]y
SFX n 0 ation [^aelry]
SFX n 0 tions a
SFX n e tions ce
SFX n ke cations ke
SFX n e ations [iou]te
SFX n e ions [^iou]te
SFX n e ations [^ckt]e
SFX n el ulsions el
SFX n 0 lations [aiou]l
SFX n 0 ations [^aeiou]l
SFX n er rations er
SFX n 0 ations [^e]r
SFX n y ations py
SFX n y ications [^p]y
SFX n 0 ations [^aelry]
SFX X Y 26
SFX X b ptions b
SFX X d sions d
SFX X be ptions be
SFX X e tions ce
SFX X ke cations ke
SFX X de sions de
SFX X e ptions ume
SFX X e mations [^u]me
SFX X e ions [^o]se
SFX X e itions ose
SFX X e ations [iou]te
SFX X e ions [^iou]te
SFX X e ations [^bcdkmst]e
SFX X el ulsions el
SFX X 0 lations [aiou]l
SFX X 0 ations [^aeiou]l
SFX X 0 mations [aeiou]m
SFX X 0 ations [^aeiou]m
SFX X er rations er
SFX X 0 ations [^e]r
SFX X 0 ions [sx]
SFX X t ssions mit
SFX X 0 ions [^m]it
SFX X 0 ations [^i]t
SFX X y ications y
SFX X 0 ations [^bdelmrstxy]
SFX x Y 40
SFX x b ptional b
SFX x d sional d
SFX x be ptional be
SFX x e tional ce
SFX x ke cational ke
SFX x de sional de
SFX x e ional [^o]se
SFX x e itional ose
SFX x e ional te
SFX x e ational [^bcdkst]e
SFX x el ulsional el
SFX x 0 lational [aiou]l
SFX x 0 ational [^aeiou]l
SFX x er rational er
SFX x 0 ational [^e]r
SFX x 0 ional [sx]
SFX x 0 ional [^n]t
SFX x 0 ational nt
SFX x y icational y
SFX x 0 ational [^bdelrstxy]
SFX x b ptionally b
SFX x d sionally d
SFX x be ptionally be
SFX x e tionally ce
SFX x ke cationally ke
SFX x de sionally de
SFX x e ionally [^o]se
SFX x e itionally ose
SFX x e ionally te
SFX x e ationally [^bcdkst]e
SFX x el ulsionally el
SFX x 0 lationally [aiou]l
SFX x 0 ationally [^aeiou]l
SFX x er rationally er
SFX x 0 ationally [^e]r
SFX x 0 ionally [sx]
SFX x 0 ionally [^n]t
SFX x 0 ationally nt
SFX x y icationally y
SFX x 0 ationally [^bdelrstxy]
SFX H N 13
SFX H y ieth y
SFX H ree ird ree
SFX H ve fth ve
SFX H e th [^ev]e
SFX H 0 h t
SFX H 0 th [^ety]
SFX H y ieths y
SFX H ree irds ree
SFX H ve fths ve
SFX H e ths [^ev]e
SFX H 0 hs t
SFX H 0 ths [^ety]
SFX H 0 fold .
SFX Y Y 9
SFX Y 0 ally ic
SFX Y 0 ly [^i]c
SFX Y e y [^aeiou]le
SFX Y 0 ly [aeiou]le
SFX Y 0 ly [^l]e
SFX Y 0 y [^aeiou]l
SFX Y y ily [^aeiou]y
SFX Y 0 ly [aeiou][ly]
SFX Y 0 ly [^cely]
SFX G Y 24
SFX G e ing [^eioy]e
SFX G 0 ing [eoy]e
SFX G ie ying ie
SFX G 0 bing [^aeio][aeiou]b
SFX G 0 king [^aeio][aeiou]c
SFX G 0 ding [^aeio][aeiou]d
SFX G 0 fing [^aeio][aeiou]f
SFX G 0 ging [^aeio][aeiou]g
SFX G 0 king [^aeio][aeiou]k
SFX G 0 ling [^aeio][eiou]l
SFX G 0 ing [aeio][eiou]l
SFX G 0 ling [^aeo]al
SFX G 0 ing [aeo]al
SFX G 0 ming [^aeio][aeiou]m
SFX G 0 ning [^aeio][aeiou]n
SFX G 0 ping [^aeio][aeiou]p
SFX G 0 ring [^aeio][aeiou]r
SFX G 0 sing [^aeio][aeiou]s
SFX G 0 ting [^aeio][aeiou]t
SFX G 0 ving [^aeio][aeiou]v
SFX G 0 zing [^aeio][aeiou]z
SFX G 0 ing [aeio][aeiou][bcdfgkmnprstvz]
SFX G 0 ing [^aeiou][bcdfgklmnprstvz]
SFX G 0 ing [^ebcdfgklmnprstvz]
SFX J Y 25
SFX J e ings [^eioy]e
SFX J 0 ings [eoy]e
SFX J ie yings ie
SFX J 0 bings [^aeio][aeiou]b
SFX J 0 king [^aeio][aeiou]c
SFX J 0 dings [^aeio][aeiou]d
SFX J 0 fings [^aeio][aeiou]f
SFX J 0 gings [^aeio][aeiou]g
SFX J 0 kings [^aeio][aeiou]k
SFX J 0 lings [^aeio][eiou]l
SFX J 0 ings [aeio][eiou]l
SFX J 0 lings [^aeo]al
SFX J 0 ings [aeo]al
SFX J 0 mings [^aeio][aeiou]m
SFX J 0 nings [^aeio][aiou]n
SFX J 0 pings [^aeio][aeiou]p
SFX J 0 rings [^aeio][aiou]r
SFX J 0 sings [^aeio][aeiou]s
SFX J 0 tings [^aeio][aiou]t
SFX J 0 vings [^aeio][aeiou]v
SFX J 0 zings [^aeio][aeiou]z
SFX J 0 ings [^aeio]e[nrt]
SFX J 0 ings [aeio][aeiou][bcdfgkmnprstvz]
SFX J 0 ings [^aeiou][bcdfgklmnprstvz]
SFX J 0 ings [^ebcdfgklmnprstvz]
SFX k Y 8
SFX k e ingly [^eioy]e
SFX k 0 ingly [eoy]e
SFX k ie yingly ie
SFX k 0 kingly [^aeio][aeiou]c
SFX k 0 lingly [^aeio][aeiou]l
SFX k 0 ingly [aeio][aeiou][cl]
SFX k 0 ingly [^aeiou][cl]
SFX k 0 ingly [^ecl]
SFX D Y 25
SFX D 0 d [^e]e
SFX D e d ee
SFX D 0 bed [^aeio][aeiou]b
SFX D 0 ked [^aeio][aeiou]c
SFX D 0 ded [^aeio][aeiou]d
SFX D 0 fed [^aeio][aeiou]f
SFX D 0 ged [^aeio][aeiou]g
SFX D 0 ked [^aeio][aeiou]k
SFX D 0 led [^aeio][eiou]l
SFX D 0 ed [aeio][eiou]l
SFX D 0 led [^aeo]al
SFX D 0 ed [aeo]al
SFX D 0 med [^aeio][aeiou]m
SFX D 0 ned [^aeio][aeiou]n
SFX D 0 ped [^aeio][aeiou]p
SFX D 0 red [^aeio][aeiou]r
SFX D 0 sed [^aeio][aeiou]s
SFX D 0 ted [^aeio][aeiou]t
SFX D 0 ved [^aeio][aeiou]v
SFX D 0 zed [^aeio][aeiou]z
SFX D y ied [^aeiou]y
SFX D 0 ed [aeiou]y
SFX D 0 ed [aeio][aeiou][bcdfgkmnprstvz]
SFX D 0 ed [^aeiou][bcdfgklmnprstvz]
SFX D 0 ed [^ebcdfgklmnprstvyz]
SFX d Y 16
SFX d 0 d e
SFX d 0 ked [^aeio][aeiou]c
SFX d 0 led [^aeio][aeiou]l
SFX d y ied [^aeiou]y
SFX d 0 ed [aeiou]y
SFX d 0 ed [aeio][aeiou][cl]
SFX d 0 ed [^aeiou][cl]
SFX d 0 ed [^ecly]
SFX d e ing [^eioy]e
SFX d 0 ing [eoy]e
SFX d ie ying ie
SFX d 0 king [^aeio][aeiou]c
SFX d 0 ling [^aeio][aeiou]l
SFX d 0 ing [aeio][aeiou][cl]
SFX d 0 ing [^aeiou][cl]
SFX d 0 ing [^ecl]
SFX h Y 22
SFX h 0 dly e
SFX h 0 bedly [^aeio][aeiou]b
SFX h 0 kedly [^aeio][aeiou]c
SFX h 0 dedly [^aeio][aeiou]d
SFX h 0 fedly [^aeio][aeiou]f
SFX h 0 gedly [^aeio][aeiou]g
SFX h 0 kedly [^aeio][aeiou]k
SFX h 0 ledly [^aeio][aeiou]l
SFX h 0 medly [^aeio][aeiou]m
SFX h 0 nedly [^aeio][aiou]n
SFX h 0 pedly [^aeio][aeiou]p
SFX h 0 redly [^aeio][aiou]r
SFX h 0 sedly [^aeio][aeiou]s
SFX h 0 tedly [^aeio][aiou]t
SFX h 0 vedly [^aeio][aeiou]v
SFX h 0 zedly [^aeio][aeiou]z
SFX h 0 edly [^aeio]e[nrt]
SFX h y iedly [^aeiou]y
SFX h 0 edly [aeiou]y
SFX h 0 edly [aeio][aeiou][bcdfgklmnprstvz]
SFX h 0 edly [^aeiou][bcdfgklmnprstvz]
SFX h 0 edly [^ebcdfgklmnprstvyz]
SFX i Y 22
SFX i 0 dness e
SFX i 0 bedness [^aeio][aeiou]b
SFX i 0 kedness [^aeio][aeiou]c
SFX i 0 dedness [^aeio][aeiou]d
SFX i 0 fedness [^aeio][aeiou]f
SFX i 0 gedness [^aeio][aeiou]g
SFX i 0 kedness [^aeio][aeiou]k
SFX i 0 ledness [^aeio][aeiou]l
SFX i 0 medness [^aeio][aeiou]m
SFX i 0 nedness [^aeio][aiou]n
SFX i 0 pedness [^aeio][aeiou]p
SFX i 0 redness [^aeio][aiou]r
SFX i 0 sedness [^aeio][aeiou]s
SFX i 0 tedness [^aeio][aiou]t
SFX i 0 vedness [^aeio][aeiou]v
SFX i 0 zedness [^aeio][aeiou]z
SFX i 0 edness [^aeio]e[nrt]
SFX i y iedness [^aeiou]y
SFX i 0 edness [aeiou]y
SFX i 0 edness [aeio][aeiou][bcdfgklmnprstvz]
SFX i 0 edness [^aeiou][bcdfgklmnprstvz]
SFX i 0 edness [^ebcdfgklmnprstvyz]
SFX T Y 42
SFX T 0 r e
SFX T 0 st e
SFX T 0 ber [^aeio][aeiou]b
SFX T 0 best [^aeio][aeiou]b
SFX T 0 ker [^aeio][aeiou]c
SFX T 0 kest [^aeio][aeiou]c
SFX T 0 der [^aeio][aeiou]d
SFX T 0 dest [^aeio][aeiou]d
SFX T 0 fer [^aeio][aeiou]f
SFX T 0 fest [^aeio][aeiou]f
SFX T 0 ger [^aeio][aeiou]g
SFX T 0 gest [^aeio][aeiou]g
SFX T 0 ker [^aeio][aeiou]k
SFX T 0 kest [^aeio][aeiou]k
SFX T 0 ler [^aeio][aeiou]l
SFX T 0 lest [^aeio][aeiou]l
SFX T 0 mer [^aeio][aeiou]m
SFX T 0 mest [^aeio][aeiou]m
SFX T 0 ner [^aeio][aeiou]n
SFX T 0 nest [^aeio][aeiou]n
SFX T 0 per [^aeio][aeiou]p
SFX T 0 pest [^aeio][aeiou]p
SFX T 0 rer [^aeio][aeiou]r
SFX T 0 rest [^aeio][aeiou]r
SFX T 0 ser [^aeio][aeiou]s
SFX T 0 sest [^aeio][aeiou]s
SFX T 0 ter [^aeio][aeiou]t
SFX T 0 test [^aeio][aeiou]t
SFX T 0 ver [^aeio][aeiou]v
SFX T 0 vest [^aeio][aeiou]v
SFX T 0 zer [^aeio][aeiou]z
SFX T 0 zest [^aeio][aeiou]z
SFX T y ier [^aeiou]y
SFX T y iest [^aeiou]y
SFX T 0 er [aeiou]y
SFX T 0 est [aeiou]y
SFX T 0 er [aeio][aeiou][bcdfgklmnprstvz]
SFX T 0 er [^aeiou][bcdfgklmnprstvz]
SFX T 0 er [^ebcdfgklmnprstvyz]
SFX T 0 est [aeio][aeiou][bcdfgklmnprstvz]
SFX T 0 est [^aeiou][bcdfgklmnprstvz]
SFX T 0 est [^ebcdfgklmnprstvyz]
SFX R Y 72
SFX R 0 r e
SFX R 0 rs e
SFX R 0 ber [^aeio][aeiou]b
SFX R 0 bers [^aeio][aeiou]b
SFX R 0 ker [^aeio][aeiou]c
SFX R 0 kers [^aeio][aeiou]c
SFX R 0 der [^aeio][aeiou]d
SFX R 0 ders [^aeio][aeiou]d
SFX R 0 fer [^aeio][aeiou]f
SFX R 0 fers [^aeio][aeiou]f
SFX R 0 ger [^aeio][aeiou]g
SFX R 0 gers [^aeio][aeiou]g
SFX R 0 ker [^aeio][aeiou]k
SFX R 0 kers [^aeio][aeiou]k
SFX R 0 ler [^aeio][eiou]l
SFX R 0 er [aeio][eiou]l
SFX R 0 ler [^aeo]al
SFX R 0 er [aeo]al
SFX R 0 lers [^aeio][eiou]l
SFX R 0 ers [aeio][eiou]l
SFX R 0 lers [^aeo]al
SFX R 0 ers [aeo]al
SFX R 0 mer [^aeio][aeiou]m
SFX R 0 mers [^aeio][aeiou]m
SFX R 0 ner [^aeio][aeiou]n
SFX R 0 ners [^aeio][aeiou]n
SFX R 0 per [^aeio][aeiou]p
SFX R 0 pers [^aeio][aeiou]p
SFX R 0 rer [^aeio][aeiou]r
SFX R 0 rers [^aeio][aeiou]r
SFX R 0 ser [^aeio][aeiou]s
SFX R 0 sers [^aeio][aeiou]s
SFX R 0 ter [^aeio][aeiou]t
SFX R 0 ters [^aeio][aeiou]t
SFX R 0 ver [^aeio][aeiou]v
SFX R 0 vers [^aeio][aeiou]v
SFX R 0 zer [^aeio][aeiou]z
SFX R 0 zers [^aeio][aeiou]z
SFX R y ier [^aeiou]y
SFX R y iers [^aeiou]y
SFX R 0 er [aeiou]y
SFX R 0 ers [aeiou]y
SFX R 0 er [aeio][aeiou][bcdfgkmnprstvz]
SFX R 0 ers [aeio][aeiou][bcdfgkmnprstvz]
SFX R 0 er [^aeiou][bcdfgklmnprstvz]
SFX R 0 ers [^aeiou][bcdfgklmnprstvz]
SFX R 0 er [^ebcdfgklmnprstvyz]
SFX R 0 ers [^ebcdfgklmnprstvyz]
SFX R 0 r's e
SFX R 0 ber's [^aeio][aeiou]b
SFX R 0 ker's [^aeio][aeiou]c
SFX R 0 der's [^aeio][aeiou]d
SFX R 0 fer's [^aeio][aeiou]f
SFX R 0 ger's [^aeio][aeiou]g
SFX R 0 ker's [^aeio][aeiou]k
SFX R 0 ler's [^aeio][eiou]l
SFX R 0 er's [aeio][eiou]l
SFX R 0 ler's [^aeo]al
SFX R 0 er's [aeo]al
SFX R 0 mer's [^aeio][aeiou]m
SFX R 0 ner's [^aeio][aeiou]n
SFX R 0 per's [^aeio][aeiou]p
SFX R 0 rer's [^aeio][aeiou]r
SFX R 0 ser's [^aeio][aeiou]s
SFX R 0 ter's [^aeio][aeiou]t
SFX R 0 ver's [^aeio][aeiou]v
SFX R 0 zer's [^aeio][aeiou]z
SFX R y ier's [^aeiou]y
SFX R 0 er's [aeiou]y
SFX R 0 er's [aeio][aeiou][bcdfgkmnprstvz]
SFX R 0 er's [^aeiou][bcdfgklmnprstvz]
SFX R 0 er's [^ebcdfgklmnprstvyz]
SFX r Y 24
SFX r 0 r e
SFX r 0 ler [^aeio][aeiou]l
SFX r 0 ker [^aeio][aeiou]c
SFX r y ier [^aeiou]y
SFX r 0 er [aeiou]y
SFX r 0 er [aeio][aeiou][cl]
SFX r 0 er [^aeiou][cl]
SFX r 0 er [^ecly]
SFX r 0 rs e
SFX r 0 lers [^aeio][aeiou]l
SFX r 0 kers [^aeio][aeiou]c
SFX r y iers [^aeiou]y
SFX r 0 ers [aeiou]y
SFX r 0 ers [aeio][aeiou][cl]
SFX r 0 ers [^aeiou][cl]
SFX r 0 ers [^ecly]
SFX r 0 r's e
SFX r 0 ler's [^aeio][aeiou]l
SFX r 0 ker's [^aeio][aeiou]c
SFX r y ier's [^aeiou]y
SFX r 0 er's [aeiou]y
SFX r 0 er's [aeio][aeiou][cl]
SFX r 0 er's [^aeiou][cl]
SFX r 0 er's [^ecly]
SFX S Y 9
SFX S y ies [^aeiou]y
SFX S 0 s [aeiou]y
SFX S 0 es [sxz]
SFX S 0 es [cs]h
SFX S 0 s [^cs]h
SFX S 0 s [ae]u
SFX S 0 x [ae]u
SFX S 0 s [^ae]u
SFX S 0 s [^hsuxyz]
SFX P Y 6
SFX P y iness [^aeiou]y
SFX P 0 ness [aeiou]y
SFX P 0 ness [^y]
SFX P y iness's [^aeiou]y
SFX P 0 ness's [aeiou]y
SFX P 0 ness's [^y]
SFX m Y 20
SFX m 0 sman [bdknmt]
SFX m 0 sman [aeiou][bdklmnt]e
SFX m 0 man [^aeiou][bdklmnt]e
SFX m 0 man [^bdklmnt]e
SFX m 0 man [^bdeknmt]
SFX m 0 smen [bdknmt]
SFX m 0 smen [aeiou][bdklmnt]e
SFX m 0 men [^aeiou][bdklmnt]e
SFX m 0 men [^bdklmnt]e
SFX m 0 men [^bdeknmt]
SFX m 0 sman's [bdknmt]
SFX m 0 sman's [aeiou][bdklmnt]e
SFX m 0 man's [^aeiou][bdklmnt]e
SFX m 0 man's [^bdklmnt]e
SFX m 0 man's [^bdeknmt]
SFX m 0 smen's [bdknmt]
SFX m 0 smen's [aeiou][bdklmnt]e
SFX m 0 men's [^aeiou][bdklmnt]e
SFX m 0 men's [^bdklmnt]e
SFX m 0 men's [^bdeknmt]
SFX 5 Y 15
SFX 5 0 swoman [bdknmt]
SFX 5 0 swoman [aeiou][bdklmnt]e
SFX 5 0 woman [^aeiou][bdklmnt]e
SFX 5 0 woman [^bdklmnt]e
SFX 5 0 woman [^bdeknmt]
SFX 5 0 swomen [bdknmt]
SFX 5 0 swomen [aeiou][bdklmnt]e
SFX 5 0 women [^aeiou][bdklmnt]e
SFX 5 0 women [^bdklmnt]e
SFX 5 0 women [^bdeknmt]
SFX 5 0 swoman's [bdknmt]
SFX 5 0 swoman's [aeiou][bdklmnt]e
SFX 5 0 woman's [^aeiou][bdklmnt]e
SFX 5 0 woman's [^bdklmnt]e
SFX 5 0 woman's [^bdeknmt]
SFX 6 Y 3
SFX 6 y iful [^aeiou]y
SFX 6 0 ful [aeiou]y
SFX 6 0 ful [^y]
SFX j Y 3
SFX j y ifully [^aeiou]y
SFX j 0 fully [aeiou]y
SFX j 0 fully [^y]
SFX p Y 5
SFX p y iless [^aeiou]y
SFX p 0 less [aeiou]y
SFX p 0 ess ll
SFX p 0 less [^l]l
SFX p 0 less [^ly]
SFX Q Y 44
SFX Q 0 tise a
SFX Q e ise [^l]e
SFX Q le ilise [^aeiou]le
SFX Q e ise [aeiou]le
SFX Q um ise um
SFX Q 0 ise [^u]m
SFX Q s se is
SFX Q 0 ise [^i]s
SFX Q y ise [^aeiou]y
SFX Q 0 ise [aeiou]y
SFX Q 0 ise [^aemsy]
SFX Q 0 tises a
SFX Q e ises [^l]e
SFX Q le ilises [^aeiou]le
SFX Q e ises [aeiou]le
SFX Q um ises um
SFX Q 0 ises [^u]m
SFX Q s ses is
SFX Q 0 ises [^i]s
SFX Q y ises [^aeiou]y
SFX Q 0 ises [aeiou]y
SFX Q 0 ises [^aemsy]
SFX Q 0 tised a
SFX Q e ised [^l]e
SFX Q le ilised [^aeiou]le
SFX Q e ised [aeiou]le
SFX Q um ised um
SFX Q 0 ised [^u]m
SFX Q s sed is
SFX Q 0 ised [^i]s
SFX Q y ised [^aeiou]y
SFX Q 0 ised [aeiou]y
SFX Q 0 ised [^aemsy]
SFX Q 0 tising a
SFX Q e ising [^l]e
SFX Q le ilising [^aeiou]le
SFX Q e ising [aeiou]le
SFX Q um ising um
SFX Q 0 ising [^u]m
SFX Q s sing is
SFX Q 0 ising [^i]s
SFX Q y ising [^aeiou]y
SFX Q 0 ising [aeiou]y
SFX Q 0 ising [^aemsy]
SFX 8 Y 44
SFX 8 0 tize a
SFX 8 e ize [^l]e
SFX 8 le ilize [^aeiou]le
SFX 8 e ize [aeiou]le
SFX 8 um ize um
SFX 8 0 ize [^u]m
SFX 8 s ze is
SFX 8 0 ize [^i]s
SFX 8 y ize [^aeiou]y
SFX 8 0 ize [aeiou]y
SFX 8 0 ize [^aemsy]
SFX 8 0 tizes a
SFX 8 e izes [^l]e
SFX 8 le ilizes [^aeiou]le
SFX 8 e izes [aeiou]le
SFX 8 um izes um
SFX 8 0 izes [^u]m
SFX 8 s zes is
SFX 8 0 izes [^i]s
SFX 8 y izes [^aeiou]y
SFX 8 0 izes [aeiou]y
SFX 8 0 izes [^aemsy]
SFX 8 0 tized a
SFX 8 e ized [^l]e
SFX 8 le ilized [^aeiou]le
SFX 8 e ized [aeiou]le
SFX 8 um ized um
SFX 8 0 ized [^u]m
SFX 8 s zed is
SFX 8 0 ized [^i]s
SFX 8 y ized [^aeiou]y
SFX 8 0 ized [aeiou]y
SFX 8 0 ized [^aemsy]
SFX 8 0 tizing a
SFX 8 e izing [^l]e
SFX 8 le ilizing [^aeiou]le
SFX 8 e izing [aeiou]le
SFX 8 um izing um
SFX 8 0 izing [^u]m
SFX 8 s zing is
SFX 8 0 izing [^i]s
SFX 8 y izing [^aeiou]y
SFX 8 0 izing [aeiou]y
SFX 8 0 izing [^aemsy]
SFX q Y 22
SFX q 0 tisation a
SFX q e isation [^l]e
SFX q le ilisation [^aeiou]le
SFX q e isation [aeiou]le
SFX q um isation um
SFX q 0 isation [^u]m
SFX q s sation is
SFX q 0 isation [^i]s
SFX q y isation [^aeiou]y
SFX q 0 isation [aeiou]y
SFX q 0 isation [^aemsy]
SFX q 0 tisations a
SFX q e isations [^l]e
SFX q le ilisations [^aeiou]le
SFX q e isations [aeiou]le
SFX q um isations um
SFX q 0 isations [^u]m
SFX q s sations is
SFX q 0 isations [^i]s
SFX q y isations [^aeiou]y
SFX q 0 isations [aeiou]y
SFX q 0 isations [^aemsy]
SFX - Y 22
SFX - 0 tization a
SFX - e ization [^l]e
SFX - le ilization [^aeiou]le
SFX - e ization [aeiou]le
SFX - um ization um
SFX - 0 ization [^u]m
SFX - s zation is
SFX - 0 ization [^i]s
SFX - y ization [^aeiou]y
SFX - 0 ization [aeiou]y
SFX - 0 ization [^aemsy]
SFX - 0 tizations a
SFX - e izations [^l]e
SFX - le ilizations [^aeiou]le
SFX - e izations [aeiou]le
SFX - um izations um
SFX - 0 izations [^u]m
SFX - s zations is
SFX - 0 izations [^i]s
SFX - y izations [^aeiou]y
SFX - 0 izations [aeiou]y
SFX - 0 izations [^aemsy]
SFX s Y 33
SFX s 0 tiser a
SFX s e iser [^l]e
SFX s le iliser [^aeiou]le
SFX s e iser [aeiou]le
SFX s um iser um
SFX s 0 iser [^u]m
SFX s s ser is
SFX s 0 iser [^i]s
SFX s y iser [^aeiou]y
SFX s 0 iser [aeiou]y
SFX s 0 iser [^aemsy]
SFX s 0 tisers a
SFX s e isers [^l]e
SFX s le ilisers [^aeiou]le
SFX s e isers [aeiou]le
SFX s um isers um
SFX s 0 isers [^u]m
SFX s s sers is
SFX s 0 isers [^i]s
SFX s y isers [^aeiou]y
SFX s 0 isers [aeiou]y
SFX s 0 isers [^aemsy]
SFX s 0 tiser's a
SFX s e iser's [^l]e
SFX s le iliser's [^aeiou]le
SFX s e iser's [aeiou]le
SFX s um iser's um
SFX s 0 iser's [^u]m
SFX s s ser's is
SFX s 0 iser's [^i]s
SFX s y iser's [^aeiou]y
SFX s 0 iser's [aeiou]y
SFX s 0 iser's [^aemsy]
SFX 9 Y 33
SFX 9 0 tizer a
SFX 9 e izer [^l]e
SFX 9 le ilizer [^aeiou]le
SFX 9 e izer [aeiou]le
SFX 9 um izer um
SFX 9 0 izer [^u]m
SFX 9 s zer is
SFX 9 0 izer [^i]s
SFX 9 y izer [^aeiou]y
SFX 9 0 izer [aeiou]y
SFX 9 0 izer [^aemsy]
SFX 9 0 tizers a
SFX 9 e izers [^l]e
SFX 9 le ilizers [^aeiou]le
SFX 9 e izers [aeiou]le
SFX 9 um izers um
SFX 9 0 izers [^u]m
SFX 9 s zers is
SFX 9 0 izers [^i]s
SFX 9 y izers [^aeiou]y
SFX 9 0 izers [aeiou]y
SFX 9 0 izers [^aemsy]
SFX 9 0 tizer's a
SFX 9 e izer's [^l]e
SFX 9 le ilizer's [^aeiou]le
SFX 9 e izer's [aeiou]le
SFX 9 um izer's um
SFX 9 0 izer's [^u]m
SFX 9 s zer's is
SFX 9 0 izer's [^i]s
SFX 9 y izer's [^aeiou]y
SFX 9 0 izer's [aeiou]y
SFX 9 0 izer's [^aemsy]
SFX t Y 22
SFX t 0 tisable a
SFX t e isable [^l]e
SFX t le ilisable [^aeiou]le
SFX t e isable [aeiou]le
SFX t um isable um
SFX t 0 isable [^u]m
SFX t s sable is
SFX t 0 isable [^i]s
SFX t y isable [^aeiou]y
SFX t 0 isable [aeiou]y
SFX t 0 isable [^aemsy]
SFX t 0 tisability a
SFX t e isability [^l]e
SFX t le ilisability [^aeiou]le
SFX t e isability [aeiou]le
SFX t um isability um
SFX t 0 isability [^u]m
SFX t s sability is
SFX t 0 isability [^i]s
SFX t y isability [^aeiou]y
SFX t 0 isability [aeiou]y
SFX t 0 isability [^aemsy]
SFX + Y 22
SFX + 0 tizable a
SFX + e izable [^l]e
SFX + le ilizable [^aeiou]le
SFX + e izable [aeiou]le
SFX + um izable um
SFX + 0 izable [^u]m
SFX + s zable is
SFX + 0 izable [^i]s
SFX + y izable [^aeiou]y
SFX + 0 izable [aeiou]y
SFX + 0 izable [^aemsy]
SFX + 0 tizability a
SFX + e izability [^l]e
SFX + le ilizability [^aeiou]le
SFX + e izability [aeiou]le
SFX + um izability um
SFX + 0 izability [^u]m
SFX + s zability is
SFX + 0 izability [^i]s
SFX + y izability [^aeiou]y
SFX + 0 izability [aeiou]y
SFX + 0 izability [^aemsy]
SFX M Y 1
SFX M 0 's .
SFX B Y 48
SFX B e able [^acegilotu]e
SFX B 0 able [acegilou]e
SFX B te ble ate
SFX B e able [^a]te
SFX B 0 bable [^aeio][aeiou]b
SFX B 0 kable [^aeio][aeiou]c
SFX B 0 dable [^aeio][aeiou]d
SFX B 0 fable [^aeio][aeiou]f
SFX B 0 gable [^aeio][aeiou]g
SFX B 0 kable [^aeio][aeiou]k
SFX B 0 lable [^aeio][aeiou]l
SFX B 0 mable [^aeio][aeiou]m
SFX B 0 nable [^aeio][aeiou]n
SFX B 0 pable [^aeio][aeiou]p
SFX B 0 rable [^aeio][aeiou]r
SFX B 0 sable [^aeio][aeiou]s
SFX B 0 table [^aeio][aeiou]t
SFX B 0 vable [^aeio][aeiou]v
SFX B 0 zable [^aeio][aeiou]z
SFX B 0 able [aeio][aeiou][bcdfgklmnprstvz]
SFX B 0 able [^aeiou][bcdfgklmnprstvz]
SFX B y iable [^aeiou]y
SFX B 0 able [aeiou]y
SFX B 0 able [^ebcdfgklmnprstvzy]
SFX B e ability [^acegilotu]e
SFX B 0 ability [acegilou]e
SFX B te bility ate
SFX B e ability [^a]te
SFX B 0 bability [^aeio][aeiou]b
SFX B 0 kability [^aeio][aeiou]c
SFX B 0 dability [^aeio][aeiou]d
SFX B 0 fability [^aeio][aeiou]f
SFX B 0 gability [^aeio][aeiou]g
SFX B 0 kability [^aeio][aeiou]k
SFX B 0 lability [^aeio][aeiou]l
SFX B 0 mability [^aeio][aeiou]m
SFX B 0 nability [^aeio][aeiou]n
SFX B 0 pability [^aeio][aeiou]p
SFX B 0 rability [^aeio][aeiou]r
SFX B 0 sability [^aeio][aeiou]s
SFX B 0 tability [^aeio][aeiou]t
SFX B 0 vability [^aeio][aeiou]v
SFX B 0 zability [^aeio][aeiou]z
SFX B 0 ability [aeio][aeiou][bcdfgklmnprstvz]
SFX B 0 ability [^aeiou][bcdfgklmnprstvz]
SFX B y iability [^aeiou]y
SFX B 0 ability [aeiou]y
SFX B 0 ability [^ebcdfgklmnprstvzy]
SFX 7 Y 9
SFX 7 e able [acegilou]e
SFX 7 0 able [^acegilou]e
SFX 7 0 kable [^aeio][aeiou]c
SFX 7 0 lable [^aeio][aeiou]l
SFX 7 0 able [aeio][aeiou][cl]
SFX 7 0 able [^aeiou][cl]
SFX 7 y iable [^aeiou]y
SFX 7 0 able [aeiou]y
SFX 7 0 able [^cely]
SFX g Y 9
SFX g e ability [^acegilou]e
SFX g 0 ability [acegilou]e
SFX g 0 kability [^aeio][aeiou]c
SFX g 0 lability [^aeio][aeiou]l
SFX g 0 ability [aeio][aeiou][cl]
SFX g 0 ability [^aeiou][cl]
SFX g y iability [^aeiou]y
SFX g 0 ability [aeiou]y
SFX g 0 ability [^cely]
SFX l Y 9
SFX l e ably [^acegilou]e
SFX l 0 ably [acegilou]e
SFX l 0 kably [^aeio][aeiou]c
SFX l 0 lably [^aeio][aeiou]l
SFX l 0 ably [aeio][aeiou][cl]
SFX l 0 ably [^aeiou][cl]
SFX l y iably [^aeiou]y
SFX l 0 ably [aeiou]y
SFX l 0 ably [^cely]
SFX b Y 3
SFX b e ible [^aeiou]e
SFX b 0 ible [aeiou]e
SFX b 0 ible [^e]
SFX L Y 12
SFX L 0 ament m
SFX L y iment [^aeiou]y
SFX L 0 ment [aeiou]y
SFX L 0 ment [^my]
SFX L 0 aments m
SFX L y iments [^aeiou]y
SFX L 0 ments [aeiou]y
SFX L 0 ments [^my]
SFX L 0 ament's m
SFX L y iment's [^aeiou]y
SFX L 0 ment's [aeiou]y
SFX L 0 ment's [^my]
SFX Z Y 22
SFX Z e y [^aeiouy]e
SFX Z 0 y [aeiouy]e
SFX Z 0 ey [aiouy]
SFX Z 0 by [^aeio][aeiou]b
SFX Z 0 ky [^aeio][aeiou]c
SFX Z 0 dy [^aeio][aeiou]d
SFX Z 0 fy [^aeio][aeiou]f
SFX Z 0 gy [^aeio][aeiou]g
SFX Z 0 ky [^aeio][aeiou]k
SFX Z 0 ly [^aeio][aeiou]l
SFX Z 0 my [^aeio][aeiou]m
SFX Z 0 ny [^aeio][aiou]n
SFX Z 0 py [^aeio][aeiou]p
SFX Z 0 ry [^aeio][aiou]r
SFX Z 0 sy [^aeio][aeiou]s
SFX Z 0 ty [^aeio][aiou]t
SFX Z 0 vy [^aeio][aeiou]v
SFX Z 0 zy [^aeio][aeiou]z
SFX Z 0 y [^aeio]e[nrt]
SFX Z 0 y [aeio][aeiou][bcdfgklmnprstvz]
SFX Z 0 y [^aeiou][bcdfgklmnprstvz]
SFX Z 0 y [^aebcdfgiklmnoprstuvyz]
SFX 2 Y 21
SFX 2 e iness [^aeiouy]e
SFX 2 0 iness [aeiouy]e
SFX 2 0 biness [^aeio][aeiou]b
SFX 2 0 kiness [^aeio][aeiou]c
SFX 2 0 diness [^aeio][aeiou]d
SFX 2 0 finess [^aeio][aeiou]f
SFX 2 0 giness [^aeio][aeiou]g
SFX 2 0 kiness [^aeio][aeiou]k
SFX 2 0 liness [^aeio][aeiou]l
SFX 2 0 miness [^aeio][aeiou]m
SFX 2 0 niness [^aeio][aiou]n
SFX 2 0 piness [^aeio][aeiou]p
SFX 2 0 riness [^aeio][aiou]r
SFX 2 0 siness [^aeio][aeiou]s
SFX 2 0 tiness [^aeio][aiou]t
SFX 2 0 viness [^aeio][aeiou]v
SFX 2 0 ziness [^aeio][aeiou]z
SFX 2 0 iness [^aeio]e[nrt]
SFX 2 0 iness [aeio][aeiou][bcdfgklmnprstvz]
SFX 2 0 iness [^aeiou][bcdfgklmnprstvz]
SFX 2 0 iness [^ebcdfgklmnprstvz]
SFX z Y 24
SFX z e ily [^aeiouy]e
SFX z 0 ily [aeiouy]e
SFX z 0 ily [aiou]y
SFX z ey ily ey
SFX z y ily [^aeiou]y
SFX z 0 bily [^aeio][aeiou]b
SFX z 0 kily [^aeio][aeiou]c
SFX z 0 dily [^aeio][aeiou]d
SFX z 0 fily [^aeio][aeiou]f
SFX z 0 gily [^aeio][aeiou]g
SFX z 0 kily [^aeio][aeiou]k
SFX z 0 lily [^aeio][aeiou]l
SFX z 0 mily [^aeio][aeiou]m
SFX z 0 nily [^aeio][aiou]n
SFX z 0 pily [^aeio][aeiou]p
SFX z 0 rily [^aeio][aiou]r
SFX z 0 sily [^aeio][aeiou]s
SFX z 0 tily [^aeio][aiou]t
SFX z 0 vily [^aeio][aeiou]v
SFX z 0 zily [^aeio][aeiou]z
SFX z 0 ily [^aeio]e[nrt]
SFX z 0 ily [aeio][aeiou][bcdfgklmnprstvyz]
SFX z 0 ily [^aeiou][bcdfgklmnprstvyz]
SFX z 0 ily [^ebcdfgklmnprstvyz]
SFX y Y 15
SFX y e ory te
SFX y e atory [mr]e
SFX y e ary se
SFX y 0 ry [^mrst]e
SFX y 0 ory [^aeous]t
SFX y 0 ry [aeous]t
SFX y 0 ery h
SFX y 0 atory [^i]m
SFX y im matory im
SFX y 0 ory s
SFX y 0 ary ion
SFX y 0 ry [^i]on
SFX y 0 nery [aiu]n
SFX y 0 ry [^aiou]n
SFX y 0 ry [^ehmstn]
SFX O Y 12
SFX O 0 l a
SFX O e al [^bcgv]e
SFX O e ial [bcgv]e
SFX O 0 ial [bcrx]
SFX O um al um
SFX O 0 al [^u]m
SFX O y al ty
SFX O y ial [^t]y
SFX O 0 ual [px]t
SFX O 0 tal [iu]t
SFX O 0 al [^ipux]t
SFX O 0 al [^aebcrtxmy]
SFX o Y 12
SFX o 0 lly a
SFX o e ally [^bcgv]e
SFX o e ially [bcgv]e
SFX o 0 ially [bcrx]
SFX o um ally um
SFX o 0 ally [^u]m
SFX o y ally ty
SFX o y ially [^t]y
SFX o 0 ually [px]t
SFX o 0 tally [iu]t
SFX o 0 ally [^ipux]t
SFX o 0 ally [^aebcrtxmy]
SFX W Y 21
SFX W ce tific ce
SFX W e atic me
SFX W se tic se
SFX W le ic ble
SFX W e ic [^b]le
SFX W e ic [^clms]e
SFX W 0 lic [ay]l
SFX W 0 ic [^ay]l
SFX W us ic us
SFX W 0 tic [^u]s
SFX W er ric er
SFX W 0 ic [^e]r
SFX W 0 atic [aeiou]m
SFX W 0 ic [^aeiou]m
SFX W 0 tic ma
SFX W a ic [^m]a
SFX W y etic thy
SFX W y ic [^t]hy
SFX W y tic sy
SFX W y ic [^hs]y
SFX W 0 ic [^aelmrsy]
SFX w Y 9
SFX w e ical e
SFX w er rical er
SFX w 0 ical [^e]r
SFX w 0 atical [aeiou]m
SFX w 0 ical [^aeiou]m
SFX w 0 tical ma
SFX w a ical [^m]a
SFX w y ical y
SFX w 0 ical [^aemry]
SFX 1 Y 9
SFX 1 e ically e
SFX 1 er rically er
SFX 1 0 ically [^e]r
SFX 1 0 atically [aeiou]m
SFX 1 0 ically [^aeiou]m
SFX 1 0 tically ma
SFX 1 a ically [^m]a
SFX 1 y ically y
SFX 1 0 ically [^aemry]
SFX 3 Y 21
SFX 3 e ist [^aceiou]e
SFX 3 ce tist ce
SFX 3 0 ist [aeiou]e
SFX 3 y ist [^aeioubp]y
SFX 3 0 ist [aeioubp]y
SFX 3 o ist o
SFX 3 0 ists [^eoy]
SFX 3 e ists [^aceiou]e
SFX 3 ce tists ce
SFX 3 0 ists [aeiou]e
SFX 3 y ists [^aeioubp]y
SFX 3 0 ists [aeioubp]y
SFX 3 o ists o
SFX 3 0 ists [^eoy]
SFX 3 e ist's [^aceiou]e
SFX 3 ce tist's ce
SFX 3 0 ist's [aeiou]e
SFX 3 y ist's [^aeioubp]y
SFX 3 0 ist's [aeioubp]y
SFX 3 o ist's o
SFX 3 0 ist's [^eoy]
`;

const word = `

hokey-cokey
Hokkaido
Holbeck
Holbrook
Holcomb/M
hold-up/MS
hold/RSGJ7
holdall/SM
holdback/S
Holden
holding/M
holdout/SM
holdover/MS
Holdsworth/M
hole/GDSM
holeable
holey
holiday/GSMD
holidayer
holidaymaker/S
holier-than-thou
holiness/S
holism
holist/S
holistic/Y
Holland/M
hollandaise
Hollander/S
holler/Sd
Hollerith
Holley/M
Hollingham
Hollister
hollow-eyed
hollow/PDTGSY
Holloway/M
hollowness/S
hollowware/M
holly/MS
hollyhock/SM
Hollywood/M
Holm/M
Holman/M
Holmes/M
holmium/M
holocaust/SM
Holocene
holodeck
holoenzyme/S
Holofernes/M
hologram/SM
holograph/DSZGWM
holographically
holography/SM
holometabolous
holotype/S
Holst
Holstein
holster/MdS
Holt
Holtzman/M
holy/PST
Holyhead/M
Holyoke
Holyrood/M
Holyroodhouse
holystone/SMGD
Holzman
homage/SM
homager/M
homburg/MS
home-based
home-brew/SDM
home-builder/S
home-building
home-cooked
home-grown
home-loving
home-made
home-maker/SM
home-making/M
home-owner/MS
home-ownership
home-owning
home-schooling
home-shopper
home-shopping
home/RpYGzDMS
homebody/SM
homebuilder/S
homebuilding
homebuilt
homebuyer/S
homecoming/SM
homeland/MS
homeless/P
homelessness/S
homelike
homeliness/S
homely/TP
homeobox
homeopath/S
homeopathic/Y
homeopathist
homeopathy
homeowner/S
homepage/M
Homeric
Homerton
homesick/P
homesickness/S
homespun/S
homestead/GMDSR
homestretch/MS
Homet/M
homeward-bound
homeward/S
homework/GRM
homewrecker/S
homey/P
homeyness/S
homicidal
homicide/SoM
homier
homiest
homiletic/S
homily/SM
hominess's
homing/M
hominid/SM
hominoid/S
homo/SM
homocentric
homocercal
homocysteine
homoeobox
homoeopath/WSZ
homoeopathy/SM
homoeostases
homoeostasis/M
homoeostatic
homoeotherm/ZW
homoeothermal
homoerotic
homogamy/M
homogenate/SM
homogeneity/ISM
homogeneous/Y
homogeneousness
homogenisation
homogenise/RGDS
homogenize/DRGnSN
homograft/S
homograph/SM
homologise/SGD
homologize/SGD
homologous
homologue/MS
homology/SMw
homomorph/WZM1
homomorphism/SM
homomorphous
homonym/MS
homonymic
homonymous
homonymy
homophile/S
homophobe/S
homophobia/S
homophobic
homophone/MSZ
homophonic/Y
homophonous
homopolar
homopolymers
homorganic
homosex
homosexual/SMY
homosexualist/S
homosexuality/SM
homosocial
homosociality
homotopy
homozygous/Y
homunculus
Hon.
Honda/M
Hondo
Honduras/M
hone/STGDM
Honecker
honer/S
honest/EZY
honester
honestest
honesty/SME
honey/SMD
honeybee/SM
honeycomb/GDSM
honeycreeper/S
honeydew/SM
honeyeater/S
honeyguide/S
honeylocust
honeymoon/RDGMS
honeypot/S
honeysucker/S
honeysuckle/MS
honeytrap
Honeywell
honeywort
Hong/M
Honiara/M
honk/RSMDG
Honolulu
honorarium/MS
honorary/SY
honorific
honour/E7MRlDGS
honourable/MS
honourableness
honourably/S
Honshu/M
hoo-ha
hood/DGMiS
hooded/P
hoodie/S
hoodlum/SM
hoodoo/MGDS
hoodwink/SGD
hoodwinker/M
hoody/S
hooey/MS
hoof/MDGS
hoofer/MS
hoofmark/S
Hooft/M
hook-nosed
hook/RGSMD
hookah/SM
Hooke
hooked/U
hooks/U
hookup/MS
hookworm/SM
hooligan/SM
hooliganism/SM
hoop/GMDS
hooper/M
hoopla/MS
hooray/S
Hoosier
hoot/RMDGS
hootch's
Hoover's
hoover/d
Hoovers
hooves/M
hop/RDSGM
hope/6MjSGDp
hopeful/SP
hopefulness/S
hopeless/PY
hopelessness/S
hoper/M
Hopkins/M
Hopkinsville/M
hoppled
hopples
hopscotch/M
Hopson/M
Horace/M
Horatian
Horatio
Horatius
horde/MS
Horgan
horizon/SM
horizontal/SY
hormonal
hormone/oMS
Hormuz
horn/DGip2ZSM
hornbeam/MS
hornbill/S
hornblende/MS
Hornblower/M
hornbook/S
Horne
horned/P
horner
hornet/MS
hornlike
hornpipe/SM
horntail/S
Hornung
horny/PT
horology/W3wSM
horoscope/SM
horoscopic
horoscopical
horoscopy
Horowitz/M
horrendous/Y
horrible/PY
horribleness/S
horrid/PY
horrify/1SWGDk
horror-stricken
horror-struck
horror/SM
horse-breaker
horse-cloth
horse-doctor
horse-drawn
horse-race/SMG
horse-trading
horse/YmG5DMSp
horseback
horsebean/S
horsebox/S
horsedom
horseflesh/M
horsefly/SM
horsehair/SM
horselike
horsemanship/SM
horseplay
horsepower
horseradish/SM
horseshed
horseshoe/GDSM
horsetail/SM
horsewhip/GDSM
horsey
Horsham
horsier
horsiest
horsing/M
Horst
hortatory
horticultural
horticulturalist/S
horticulture/3SM
Horton
Horus/M
Horwich
hos/Sd
hosanna/GSD
hosannah
hose/M
Hosea
hosepipe
hosier/SMZ
hosiery/SM
hosp
hospice/MS
hospitable/YI
hospitably/I
hospital/Qq8SM-
hospitality's/I
hospitality/SM
host/YSMGD
hostage/MS
hostel/DRMSyG
hostelry/SM
hostess/GMDS
hostile/Y
hostility/MS
hostler/SM
hostname/S
hot-air
hot-blooded
hot-swap/DGB
hot-tempered
hot/PDSYGT
hotbed/MS
hotbox/SM
hotcake/S
hotchpotch/M
hotel/mSM
hotelier/MS
hotfoot/DSG
Hotham/M
hothead/SDihM
hotheaded/P
hotheadedness/S
hothouse/MSGD
hotkey/S
hotline/S
hotlink/SG
hotlist
hotness/S
hotplate/MS
hotplug/SDG
hotpot/MS
hotrod
hotshot/S
hotspot/S
Hottentot/M
hotters
hottie/S
hotty
Houdini
hough/M
Houghton-le-Spring/M
Houghton/M
hound/GSMD
hounder/M
hounding/M
Hounslow
hour/MYS
hourglass/SM
houri/SM
hourly/S
house's/e
house-hunting
house-husband
house-mother/SM
house-proud
house-to-house
house-train/D
house-warming/SM
house/M6SJmDG
houseboat/MS
housebound
houseboy/MS
housebreak/SRJG
housebreaking/M
housebroke
housebroken
housebuilder/S
housebuilding
houseclean/JGDS
housecleaning/M
housecoat/SM
housed/A
housefather
housefly/SM
houseful/SM
household/RSM
housekeep/GR
housemaid/SM
housemaster
housemastering
housemasterly
housemastership
housemate/S
housemating
housemistress
housemonger
housemother/SM
housemotherly
houseowner/SM
housepainter/S
houseparent/SM
houseplace
houseplant/S
houser
houseroom
houses/eA
houseshare
housesharer
housesmith
housestead
housetop/SM
housewares
housewife/MY
housewifely/P
housewifery
housewifeship
housewifish
housewives
housework/RSM
housing's
housing/A
Houston
hove
Hove/M
hovel/SM
hover/dS
hovercraft/M
hoverer/M
how'd
how're
how've
how/MS
Howard
howbeit
howdah/SM
Howden/M
Howe/S
Howell/M
however
Howitt/M
howitzer/SM
howl/DSRGM
Howley/M
howsoever
Howth/M
Hoxha/M
Hoxsey/M
hoy/M
hoyden/dMS
hoydenish
Hoyle
Hoyt/M
HP
HPV
HQ
hr.
HRH
hrs.
HRT/M
html
HTML/M
http
https
Huang
hub-cap/SM
hub/MZS
Hubbard/M
Hubble/M
hubbub/M
hubby/MS
hubcaps
Huber/M
Hubert
hubris/MS
Huck
huckleberry/MS
huckster/MSd
HUD
Huddersfield
huddle/DSMG
huddler/M
Hudley
Hudson
hue/SMDp
Huey
huff/GMZDSz2
huffiness/S
Huffington/M
Huffman/M
huffy/TP
hug/SDG
huge/PTY
hugeness/S
Huggins
Hugh
Hughes/M
Hughie
Hugo
Huguenot/SM
huh/S
hula/MDGS
hulk/GMDS
Hull/M
hull/SRGMD
hullabaloo/MS
hulling/M
hullo/MSGD
hum/RSDG
human/MsQ8Y3-q9PS
humane/P3Y
humanely/I
humaneness/I
humanenesses
humaner
humanise/CRDSnG
humanism/MS
humanist/W
humanitarian/S
humanitarianism/SM
humanity/SMI
humanize/CRDnSNG
humankind/M
humanly/I
humanness/S
humanoid/S
Humber
Humberside
humble/PTGSDY
humbleness/S
Humboldt
humbug/GDSM
humdinger/SM
humdrum
Hume
humectant/S
humeral/S
humeri
humerus/M
humid/Y
humidification/CM
humidify/CnGNRDS
humidistat/M
humidity/SM
humidor/MS
humiliate/GSkNDn
humiliation/M
humility/SM
humite
hummable
Hummel/M
hummingbird/SM
hummock/DSMZG
hummus/S
humongous
humoral
humoresque/S
humorist/WSM
humorous/PY
humorousness/S
humour/DhMpSG
humourer/S
humourless/PY
humourlessness/S
hump/GSMD
humpback/DSM
humph/S
Humphrey/M
Humphreys/M
Humpty
humpy/T
humus/SM
Hun/S
hunch/GSDM
hunchback/SMD
hundred/HMS
hundredweight/MS
hung/Ac
Hungarian/S
Hungary/M
hunger/dMS
hungover
hungriness/S
hungry/YPT
hunk/MZS
hunker/Sd
hunky/T
Hunspell/M
hunt/DmGRJS
hunter-gatherer/S
hunting/M
Huntingdon/M
Huntingdonshire/M
Huntington/M
Huntley/M
huntress/SM
Huntsville
hurdle/RMGSD
hurl/DYSGR
Hurley/M
hurling/M
hurly-burly
Huron
hurrah/DG
hurray/S
hurricane/SM
hurried/UY
hurriedness/M
hurrier
hurry/iSGhD
Hursley/M
Hurst
hurt/kjG6S
Hurtak/M
hurter/M
hurtful/P
hurtfulness/S
hurtle/DGS
husband-to-be
husband/DYyGSM
husbander/M
husbandry/MS
husbands-to-be
hush/DGS
husk/RzZSMD2G
huskiness/S
husking/M
husky/TSP
Hussain/M
hussar/SM
Hussein/M
hussy/SM
hustings/M
hustle/RGSD
Huston/M
`

function run() {
	var affData = aff
	var wordData = word

	var hashDict = new Typo("en_GB", affData, wordData);
  window.hashDict = hashDict;
	testDictionary(hashDict);
}

function testDictionary(dict) {
	test("Dictionary object attributes are properly set", function () {
		equal(dict.dictionary, "en_GB");
	});

	test("Correct checking of words", function () {
		equal(dict.check("wefwef"), false);
  });


}

addEventListener( "load", run, false );

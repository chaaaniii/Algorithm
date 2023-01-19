-- 코드를 입력하세요
SELECT animal_type, count(*)
from animal_ins
where animal_type = 'cat'
union
SELECT animal_type, count(*)
from animal_ins
where animal_type = 'dog'
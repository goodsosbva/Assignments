subjects = ["국어", "수학", "영어", "사회", "과학"]
subjects_dic = {"국어": 4, "수학": 4, "영어": 4, "사회": 3, "과학": 3}

sum = 0
for i in range(5):
    sum += int(input(subjects[i] + "등급: ")) * subjects_dic[subjects[i]]

print("당신의 내신 등급은 ", sum / 18, " 입니다")
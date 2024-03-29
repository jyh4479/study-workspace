# 1. 깨끗한 코드

- - -

# 2. 의미 있는 이름

- - -

# 3. 함수

- - -

    저자는 함수를 만드는 첫번째 규칙을 [작게] 만드는 것 이라고 소개하고
    두번째 규칙은 [더 작게] 만드는 것 이라고 강조한다.

### 한 가지만 해라!

    "함수는 한 가지를 해야 한다. 그 한 가지를 잘 해야 한다. 그 한 가지만을 해야 한다."

    함수가 한 가지만 하는지 확인하는 방법은 아래와 같다
    1. 지정된 함수 이름 아래에서 추상화 수준이 하나인 단계만 수행한다면 그 함수는 한 가지 작업만 한다.
    2. 의미 있는 이름으로 다른 함수를 추출할 수 있다면 그 함수는 여러 작업을 한다.
    3. 한 가지 작업만 하는 함수는 자연스러운 섹션으로 나누기 어렵다.

### 함수 당 추상화 수준은 하나로!

    한 함수에서

    1. getHtml();
    2. String pagePathName = PathParser.render(pagepath);
    3. .append("\n");

    등 여러가지 추상화 수준을 사용하면 헷갈린다.
    하지만 추상화 수준이 하나인 함수를 구현하는건 쉽지 않다고 소개하고있다.

### Switch

    저자는 switch를 단 한 번만 참아준다고 설명한다.
    
    다형적 객체를 생성하는 코드에서이다. (책 47-48 참고)

### 함수 인수

    함수에서 이상적인 인수 개수는 0개다. 다음은 1개, 다음은 2개다.
    3개는 가능한 피하고 4개 이상은 특별한 이유가 필요하다. (그래도 4개는 안된다.)

    책에서는 단항, 이항, 삼항 등 예제와 어떻게 변경하면 좋은지에 대해 설명해준다. (책 51 참고)

### 부수 효과를 일으키지 마라!

### 명령과 조회를 분리하라!

    함수는 뭔가를 수행하거나 뭔가에 답하거나 둘 중 하나만 해야 한다. 둘 다 하면 안 된다.

    아래는 username 프로퍼티를 확인하고 unclebob 값으로 설정한 후 성공 여부를 리턴하는 함수이다.

```javascript
    if (set("username", "unclebob"))...
```

    의미가 굉장히 모호해보인다.
    아래 코드로 변경하는게 혼란을 방지할 수 있다.

```javascript
    if (attributeExists("username")) {
    setAttribute("username", "unclebob");
}
```

### 오류 코드보다 예외를 사용하라!

    명령 함수에서 오류 코드를 반환하는 방식은 명령/조회 분리 규칙을 미묘하게 위반한다.
    (try / catch를 사용하라는 말이다.)

    try /catch 처리도 한 가지 작업으로 함수를 분리하는게 좋다고 한다.

### 반복하지 마라!

### 구조적 프로그래밍

# 4. 주석

    저자는 해당 챕터 초반부에서 주석을 사용하는건 코드로 의도를 표현하지 못해서 생기는 문제라고 지적한다.
    주석을 작성하는데 고민하기 보다 좋은 코드를 작성하는데 고민하라고 말하고있다.

### 좋은 주석

    저자는 괜찮은 주석을 몇가지 소개하지만 정말 좋은 주석은 주석을 달지 않을 방법을 찾아낸 주석이라고 한다.
    (책 70 참고)

    1. 법적인 주석
    2. 정보를 제공하는 주석
    3. 의도를 설명하는 주석
    4. 의미를 명료하게 밝히는 주석
    5. 결과를 경고하는 주석
    6. TODO 주석
    7. 중요성을 강조하는 주석
    8. 공개 API에서 Javadocs
    
    좋은 주석을 소개하면서도 주석을 사용하지 않을 방법을 고민하는게 좋다고 생각한다.
    개인적으로 3, 7번은 꽤 유용하다고 생각한다.

### 나쁜 주석

    1. 주절거리는 주석
    2. 같은 이야기를 중복하는 주석
    3. 오해할 여지가 있는 주석
    4. 의무적으로 다는 주석
    5. 이력을 기록하는 주석
    6. 있으나 마나 한 주석
    7. 위치를 표시하는 주석
    8. 닫는 괄호에 다는 주석
    9. 공로를 돌리거나 저자를 표시하는 주석
    10. 주석으로 처리한 코드
    11. HTML 주석
    12. 전역 정보
    13. 너무 많은 정보
    14. 모호한 관계
    15. 함수 헤더
    16. 비공개 코드에서 Javadocs

# 5. 형식 맞추기


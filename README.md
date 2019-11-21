# Rollup

- 모듈 번들러
- 기존 webpack의 문제점
    - ES Module 형태의 번들이 불가능
    - webpack으로 빌드할때 중복 코드가 제거되지 않음
    - webpack은 빌드시 기본 용량이 큼
    - Tree-Shaking이 잘 이루어지지 않음

- 장점
    - ES Module형태로 번들이 가능함
        - ES6 -> ES5로 바꿀때 polyfill이 생김
            - 이 함수는 모든 파일(모듈)마다 존재하고 각자 다른 함수로 인식해서 파일의 갯수만큼 생성됨
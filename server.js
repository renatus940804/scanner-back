const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// 바디 파서 미들웨어
app.use(bodyParser.json());

// 바코드 API 엔드포인트
app.post('/api/barcode', (req, res) => {
  const { barcode } = req.body;

  if (!barcode) {
    return res.status(400).send('바코드가 제공되지 않았습니다.');
  }

  // 바코드를 처리하는 로직 (DB 저장, 상품 조회 등)
  console.log(`바코드: ${barcode}`);

  // 예시로 바코드를 성공적으로 처리했다고 응답
  res.status(200).json({ message: '바코드 처리 성공', barcode });
});

// 서버 시작
app.listen(port, () => {
  console.log(`ERP 서버가 http://localhost:${port}에서 실행 중`);
});

import Image from "next/image";

// -------------------------
// 1. 타입 정의 수정
// -------------------------

// resume_general_info_service.json 파일의 타입
type GeneralInfo = {
  name: string;
};

// resume_portfolio_service.json 파일의 타입
// 키와 값이 모두 문자열인 객체임을 정의합니다.
type PortfolioData = {
  [key: string]: string;
};


// -------------------------
// 2. API 호출 함수 수정
// -------------------------

async function getGeneralInfo(): Promise<GeneralInfo> {
  // GitHub에 올린 실제 'raw' 파일 주소를 사용해야 합니다.
  const res = await fetch('https://raw.githubusercontent.com/YimJeongMin/first-deploy/main/resume_general_info_service.json');
  if (!res.ok) throw new Error('Failed to fetch general info');
  return res.json();
}

// 반환 타입을 PortfolioData로 수정
async function getPortfolioInfo(): Promise<PortfolioData> {
  // GitHub에 올린 실제 'raw' 파일 주소를 사용해야 합니다.
  const res = await fetch('https://raw.githubusercontent.com/YimJeongMin/first-deploy/main/resume_portfolio_service.json');
  if (!res.ok) throw new Error('Failed to fetch portfolio data');
  return res.json();
}


// -------------------------
// 3. 화면(JSX) 수정
// -------------------------

export default async function Home() {
  const [generalInfo, portfolioData] = await Promise.all([
    getGeneralInfo(),
    getPortfolioInfo(),
  ]);

  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-8 sm:p-20 bg-gray-50">
      <main className="flex flex-col gap-12 w-full max-w-4xl">
        
        {/* 상단 자기소개 섹션 */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            {generalInfo.name}
          </h1>
          <p className="text-xl text-gray-600">
            잘하고싶습니다. 그것이 전부입니다.
          </p>
        </section>

        {/* 포트폴리오 섹션 */}
        <section>
          <h2 className="text-3xl font-bold border-b-2 pb-2 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 💡 중요: Object.entries를 사용해 객체를 배열로 변환 후 map 실행 */}
            {Object.entries(portfolioData).map(([projectName, projectUrl]) => (
              <div key={projectName} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                
                {/* 키(key)를 프로젝트 이름으로 사용 */}
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 break-all">
                  {projectName}
                </h3>

                {/* 값(value)을 프로젝트 URL로 사용 */}
                <a 
                  href={projectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-600 font-semibold hover:underline"
                >
                  GitHub에서 프로젝트 보기 &rarr;
                </a>
              </div>
            ))}

          </div>
        </section>
      </main>
    </div>
  );
}







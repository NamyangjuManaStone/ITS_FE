import React from 'react'

const Purpose = () => (
	<>
		<span className="box__purpose_txt1">📕 팀의 목적을 선택해주세요!</span>
		<span className="box__purpose_txt2">클릭해서 선택해주세요!</span>
		<hr />
		<div className="box__purpose_box">
			<div className="box__purpose_box1">
				<img src="/images/teampro.png" alt="1"></img>
				<span className="box__purpose_box_txt1">
					같이 서비스를 만들 팀원을 구해보세요!
				</span>
				<span className="box__purpose_box_txt2">팀 프로젝트</span>
			</div>
			<div className="box__purpose_box2">
				<img src="/images/study.png" alt="2"></img>
				<span className="box__purpose_box_txt1">
					함께 성장할 팀원을 모아보세요!
				</span>
				<span className="box__purpose_box_txt2">스터디</span>
			</div>
		</div>
	</>
)
export default Purpose

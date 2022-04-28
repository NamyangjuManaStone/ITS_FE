import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Progress } from './styles'

const Purpose = () => {
	const navigate = useNavigate()

	const [count, setCount] = useState(3)

	const AddCount = () => {
		if (count === 5) {
			setCount(5)
		} else {
			setCount(count + 1)
		}
		navigate('/making/4/description')
	}
	const MinusCount = () => {
		if (count === 1) {
			setCount(1)
		} else {
			setCount(count - 1)
		}
		navigate('/making/4/skill')
	}

	return (
		<>
			<span className="making_title">팀 이름 정하기</span>
			<div className="progress">
				<Progress width={`${(count / 5) * 100}%`} />
			</div>
			<div className="box__purpose">
				<span className="box__purpose_txt1">📘 팀의 이름을 정해주세요!</span>

				<hr />
				<input type="text" className="making__name"></input>
			</div>
			<div className="btn">
				<button className="beforebtn" onClick={MinusCount}>
					전 단계로 돌아가기
				</button>
				<button className="nextbtn" onClick={AddCount}>
					다음 단계로 넘어가기
				</button>
			</div>
		</>
	)
}
export default Purpose

import { useNavigate } from 'react-router-dom'

import { LikerPageContainer } from './LikerPage.styled'

const LikerPage = () => {
	const navigate = useNavigate()
	const onMovePageTeam = () => {
		navigate('/team/4/home')
	}
	return (
		<LikerPageContainer>
			<div className="my__profile_jointeam">
				<p className="my__profile_teamtxt1">좋아요한 팀</p>
				<p className="my__profile_teamtxt2">
					호수님은 총 2개의 팀을 좋아요 했어요.
				</p>
			</div>
			<hr />
			<div className="my__profile_project">
				<div className="my__profile_proteam">
					<p className="my__profile_protxt1">
						이츠 스터디 매칭 서비스 프로젝트
					</p>
					<p className="my__profile_protxt2">
						이츠는 더 쉽게 스터디 팀을 구할 수 있는 방법을 제공합니다.
					</p>
				</div>
				<button onClick={onMovePageTeam} className="my__profile_movebtn">
					팀 페이지 이동
				</button>
			</div>
			<hr />
		</LikerPageContainer>
	)
}

export default LikerPage
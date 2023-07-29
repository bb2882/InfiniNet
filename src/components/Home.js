import { styled } from 'styled-components';

const Home = (props) => {
	return (
		<Container>
			<Section>
				<h5>
					<a>Hiring in a hurry? - </a>
				</h5>

				<p>
					 &nbsp;Find talented pros in record time with Upwork and keep businees moving.
				</p>
			</Section>
		</Container>
	)
}

const Container = styled.div`
	padding-top: 52px;
	max-width: 100%;
`;

const Content = styled.div`
	max-width: 1128px;
	margin-left: auto;
	margin-right: auto;
`;

const Section = styled.section`
	min-height: 50px;
	padding: 16px 0;
	box-sizing: content-box;
	text-align: center;
	display: flex;
	text-decoration: underline;
	justify-content: center;

	h5 {
		color: #0a66c2;
		font-size: 14px;
		text-decoration: underline;
		a {
			font-weight: 700;
		}
	}

	p {
		font-size: 14px;
		color: #434649;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0 5px;
	}
`;

export default Home
import { useState } from 'react';
import { styled } from 'styled-components';
import ReactPlayer from 'react-player'
import { connect } from 'react-redux';

const PostModal = (props) => {
	const [editorText, setEditorText] = useState("")
	const [shareImage, setShareImage] = useState("")
	const [videoLink, setVideoLink] = useState("")
	const [assetArea, setAssetArea] = useState("")

	const handleChange = (e) => {
		const image = e.target.files[0]

		if (image === '' || image === undefined) {
			alert(`Not an image, the file is a ${typeof image}`)
			return
		}

		setShareImage(image)
	}

	const switchAssetArea = (area) => {
		setShareImage("")
		setVideoLink("")
		setAssetArea(area)
	}

	const reset = (e) => {
		setEditorText("")
		setShareImage("")
		setVideoLink("")
		setAssetArea("")
		props.handleClick(e)
	}

	return (
		<>
			{ props.showModal === 'open' &&
				<Container>
					<Content>
						<Header>
							<h2>Create a post</h2>
							<button onClick={e => reset(e)}>
								<img src="/images/close-icon.svg" alt="close" />
							</button>
						</Header>

						<SharedContent>
							<UserInfo>
								{props.user.photoURL ? (
									<img src={props.user.photoURL} alt=""user />
									) : (
										<img src="/images/user.svg" alt="user" />
									)}
								<span>{props.user.displayName}</span>
							</UserInfo>

							<Editor>
								<textarea
									value={editorText}
									onChange={e => setEditorText(e.target.value)}
									placeholder="What do you want to talk about?"
									autoFocus={true}
								/>
								{ assetArea === 'image' ? (
									<UploadImage>
										<input 
										type="file" 
										accept="image/gif, image/jpeg, image/png" 
										name="image"
										id="file"
										style={{display:'none'}}
										onChange={handleChange}
										/>
										<p>
											<label htmlFor="file">Select an image to share</label>
										</p>
										{shareImage && <img src={URL.createObjectURL(shareImage)} alt="" /> }
									</UploadImage>
								): (
									assetArea === 'media' && (
										<>
											<input
											type="text"
											placeholder='Please input a video link'
											value={videoLink}
											onChange={e => setVideoLink(e.target.value)}
											/>
											{videoLink && (
												<ReactPlayer width={'100%'} url={videoLink} />
											)}
										</>
									)
								)}
							</Editor>
						</SharedContent>

						<ShareCreation>
							<AttachAssets>
								<AssetButton onClick={() => switchAssetArea('image')}>
									<img src="/images/photo-icon.svg" alt="gallery" />
								</AssetButton>

								<AssetButton onClick={() => switchAssetArea('media')}>
									<img src="/images/video-icon.svg" alt="video" />
								</AssetButton>

							</AttachAssets>

							<ShareComment>
								<AssetButton>
									<img src="/images/comment-icon.svg" alt="comment" />
									Anyone
								</AssetButton>
							</ShareComment>

							<PostButton disabled={!editorText ? true : false}>
								Post
							</PostButton>

						</ShareCreation>
					</Content>
				</Container>
			}
		</>
		
	)
}

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
	color: black;
	background-color: rgba(0, 0, 0, .8);
	animation: fadeIn .3s;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 552px;
	background-color: #fff;
	max-height: 90%;
	overflow: initial;
	border-radius: 5px;
	position: relative;
	top: 32px;
	margin: 0 auto;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	border-bottom: 1px solid rgba(0, 0, 0, .15);
	font-size: 16px;
	line-height: 1.5;
	color: rgb(0, 0, 0, .6);
	font-weight: 400;

	button {
		border: none;
		background-color: #fff;
		border-radius: 20px;
		height: 30px;
		width: 30px;
		min-width: auto;
		color: rgba(0, 0, 0, .15);
		cursor: pointer;
		transition-duration: 167ms;

		&:hover {
			background-color: rgb(0, 0, 0, .15);
		}
	}
`;

const SharedContent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-y: auto;
	vertical-align: baseline;
	background: transparent;
	padding: 8px 12px;
`;

const UserInfo = styled.div`
	display: flex;
	align-items: center;
	padding: 12px 24px;
	
	img {
		width: 48px;
		height: 48px;
		background-clip: content-box;
		border: 2px solid transparent;
		border-radius: 50%;
	}

	span {
		font-weight: 600;
		font-size: 16px;
		line-height: 1.5;
		margin: 5px;
	}
`;

const ShareCreation = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
	display: flex;
	align-items: center;
	height: 40px;
	min-width: auto;
	color: rgba(0, 0, 0, .5);

	img {
		width: 24px;
		height: 24px;
	}
`;

const AttachAssets = styled.div`
	display: flex;
	align-items: center;
	padding-right: 8px;

	${AssetButton} {
		width: 40px;
	}
`;

const ShareComment = styled.div`
	padding-left: 8px;
	margin-right: auto;
	border-left: 1px solid rgba(0, 0, 0, .15);

	${AssetButton} {
		img {
			margin-right: 5px;
		}
	}
`;

const PostButton = styled.button`
	min-width: 60px;
	border-radius: 20px;
	padding: 0 16px;
	background: ${props => (props.disabled ? 'rgba(0, 0, 0, .08)' : '#0a66c2')};
	color: ${props => props.disabled ? 'rgba(0, 0, 0, .3)' : '#fff'};
	border: none;
	transition-duration: 167ms;

	&:hover {
		background-color: ${props => (props.disabled ? 'rgba(0, 0, 0, .08)' : '#004182')};
		cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
	}
`;

const Editor = styled.div`
	padding: 12px 24px;
	
	textarea {
		width: 100%;
		min-height: 100px;
		resize: none;
		border-radius: 5px;
		
		&:focus {
			outline: none;
			box-shadow: 0 0 3px rgba(0, 0, 255, .7);
		}
	}

	input {
		border:1px solid black;
		width: 100%;
		height: 35px;
		font-size: 16px;
		margin-bottom: 20px;
		border-radius: 5px;

		&:focus {
			outline: none;
			box-shadow: 0 0 3px rgba(0, 0, 255, .7);
		}
	}

`;

const UploadImage = styled.div`
	text-align: center;

	img {
		width: 100%;
	}
`;

const mapStateToProps = state => {
	return {
		user: state.userState.user
	}
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
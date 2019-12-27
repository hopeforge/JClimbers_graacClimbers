<template>
<div class="container top" variant='primary'>
	<div class="d-flex justify-content-center h-100">
		<div class="card" >
			<div class="card-header">
				<h3>Entrar</h3>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Usuário">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="Senha">
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox">Lembrar minha conta
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn">
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Numans');
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');
@import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css');

	html, body{
	background-image: url("https://graacc.org.br/wp-content/uploads/2017/08/topograacc.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	height: 100%;
	font-family: 'Numans', sans-serif;
	}

	.container{
	height: 100%;
	align-content: center;
	}

	.card{
	height: 270px;
	margin-top: auto;
	margin-bottom: auto;
	width: 400px;
	background-color: rgba(0,0,0,0.5) !important;
	}

	.social_icon span{
	font-size: 60px;
	margin-left: 10px;
	color: rgb(59, 89, 152);
	}


	.social_icon span:hover{
	color: white;
	cursor: pointer;
	}

	.card-header h3{
	color: white;
	}

	.social_icon{
	position: absolute;
	right: 20px;
	top: -45px;
	}

	.input-group-prepend span{
	width: 50px;
	background-color: #FFC312;
	color: black;
	border:0 !important;
	}

	input:focus{
	outline: 0 0 0 0  !important;
	box-shadow: 0 0 0 0 !important;

	}

	.remember{
	color: white;
	}

	.remember input
	{
	width: 20px;
	height: 20px;
	margin-left: 15px;
	margin-right: 5px;
	}

	.login_btn{
	color: black;
	background-color: #FFC312;
	width: 100px;
	}

	.login_btn:hover{
	color: black;
	background-color: white;
	}

	.links{
	color: white;
	}

	.links a{
	margin-left: 4px;
	}

	.top{
	padding-top: 10%
	}
</style>

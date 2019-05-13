<template>
	<v-app>
		<Navigation />		
		<Header />
		<v-content>
			<Carousel/>
		</v-content>
		<Footer/>		
	</v-app>
</template>

<script>

import Navigation from '../components/template/Navigation'
import Header from '../components/template/Header'
import Carousel from '../components/widgets/Carousel'
import Footer from '../components/template/Footer'

export default {
	
	components: {		
		Header,
		Navigation,
		Carousel,
		Footer
	}
}
</script>

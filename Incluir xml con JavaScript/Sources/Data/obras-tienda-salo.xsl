<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="obras">
	
		<xsl:for-each select="obra">
			<div class="resultados">
				<p style="text-align: center;">
					<xsl:value-of select="title"/>
				</p>
				<p>
					Año: <xsl:value-of select="year"/>
				</p>
				<p>
					Precio: <b><xsl:value-of select="price"/></b>
				</p>
			</div>
		</xsl:for-each>
		
	</xsl:template>
</xsl:stylesheet>
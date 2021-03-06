export default function prepareXML(clientName: string, value: string) {
  const XML = `<?xml version="1.0" encoding="UTF-8"?>
  <pedido>
  <cliente>
  <nome>${clientName}</nome>
  <tipoPessoa>J</tipoPessoa>
  <endereco>Rua Visconde de São Gabriel</endereco>
  <cpf_cnpj>00000000000000</cpf_cnpj>
  <ie>3067663000</ie>
  <numero>392</numero>
  <complemento>Sala 54</complemento>
  <bairro>Cidade Alta</bairro>
  <cep>95.700-000</cep>
  <cidade>Bento Gonçalves</cidade>
  <uf>RS</uf>
  <fone>5481153376</fone>
  <email>teste@teste.com.br</email>
  </cliente>
  <transporte>
  <transportadora>Transportadora XYZ</transportadora>
  <tipo_frete>R</tipo_frete>
  <servico_correios>SEDEX - CONTRATO</servico_correios>
  <dados_etiqueta>
  <nome>Endereço de entrega</nome>
  <endereco>Rua Visconde de São Gabriel</endereco>
  <numero>392</numero>
  <complemento>Sala 59</complemento>
  <municipio>Bento Gonçalves</municipio>
  <uf>RS</uf>
  <cep>95.700-000</cep>
  <bairro>Cidade Alta</bairro>
  </dados_etiqueta>
  <volumes>
  <volume>
  <servico>SEDEX - CONTRATO</servico>
  <codigoRastreamento></codigoRastreamento>
  </volume>
  <volume>
  <servico>PAC - CONTRATO</servico>
  <codigoRastreamento></codigoRastreamento>
  </volume>
  </volumes>
  </transporte>
  <itens>
  <item>
  <codigo>001</codigo>
  <descricao>Produto 001</descricao>
  <un>Pç</un>
  <qtde>1</qtde>
  <vlr_unit>${value}</vlr_unit>
  </item>
  </itens>
  <parcelas>
  <parcela>
  <vlr>${value}</vlr>
  <obs>Teste obs 1</obs>
  </parcela>
  </parcelas>
  <obs>Testando o campo observações do pedido</obs>
  <obs_internas>Testando o campo observações internas do pedido</obs_internas>
 </pedido>`;
  return XML;
}

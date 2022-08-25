import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clientCurrent } from '../../JS/clientSlice/clientSlice';
import { produitGet } from '../../JS/produitSlice';
import CardRaounak from '../CardRaounak';
import ProductCard from '../ProductCard';


function Tea() {
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(clientCurrent());
    dispatch(produitGet());

    // dispatch(accessoireGet());

    // dispatch(vetementGet());
    // dispatch(commandeGet());
  }, []);

  const produit = useSelector((state => state.produit.produit));
  console.log(produit)
  return (

    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", width: "100%", marginTop: "187px", marginLeft: "0px" }}>

      {produit?.filter((el) => el.categorie == "tea").map((el) => <CardRaounak el={el} />)}
    </div>
  )
}

export default Tea
import styled from "styled-components";

export const Title = styled.h1`
  color: #fff;
`

export const FormContainer = styled.form`
  width:400px;
  height:400px;
  padding:15px;
  background-color:rgba(255,255,255,0.35);
  border-radius:4px;
  box-shadow:rgba(0,0,0,0.35) 0px 5px 15px; 

`


export const LabelRegister = styled.label`
  display:block;
  font-size:16px;
  line-height:28px;
  padding:15px 0 5px 0;
`

export const InputName = styled.input.attrs({type:'text', name:'name'})`
 width:100%;
 height:36px;
 border:none;
 border-radius:4px;
 padding-left:15px;
 font-size:16px;
 color:#484848;  
`

export const InputIdade = styled.input.attrs({type:'text', name:'age'})`
 width:100%;
 height:36px;
 border:none;
 border-radius:4px;
 padding-left:15px;
 font-size:16px;
 color:#484848;
`

export const InputEmail = styled.input.attrs({type:'email', name:'email'})`
 width:100%;
 height:36px;
 border:none;
 border-radius:4px;
 padding-left:15px;
 font-size:16px;
 color:#484848;
`

export const Button = styled.button.attrs({type:'submit'})`
  width:100%;
  border:none;
  border-radius:4px;
  margin-top:20px;
  height:48px;
  font-size:24px;
  background-color:gold;
  color:#242424;
  font-weight:bold;
  cursor:pointer;
`
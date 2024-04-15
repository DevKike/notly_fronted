import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../utils/http";
import { errorAlert, successAlert } from "../../utils/toast";
import { setStorage } from "../../utils/storage"

const Login = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const login = await post('http://localhost:3001/user/login', formData);
          console.log(login)
          setStorage('Token', { token: login.token });
          successAlert('Iniciado con exito');
          navigate('/application')
        } catch (error) {
          console.error('Error al iniciar sesion:', error);
          errorAlert('Hubo un error al iniciar sesion');
        }
      };
    return <div className='card p-3 mt-5 mx-auto mt-5' style={{ width: "20rem" }}>
    <p className="mx-auto">Iniciar sesion</p>
    <form onSubmit={handleSubmit}>
        <div className='mb-3 '>
        <label htmlFor="email" className="form-label">
            Correo electronico
          </label>
          <input type="text" name="email" id="email" className="form-control" value={formData.email} onChange={handleChange} />
        </div>
        <div className='mb-3 '>
        <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input type="password" name="password" id="password" className="form-control" value={formData.password} onChange={handleChange} />
        </div>
        <div className="mb-2">
            <a href="/register" className="link-primary">No tienes cuenta? Regitrate</a>
        </div>
        <div className="col-md-6">
            <button type="submit" className='btn btn-outline-success'>Iniciar sesion</button>
        </div>
    </form>
    </div>;
};

export default Login;
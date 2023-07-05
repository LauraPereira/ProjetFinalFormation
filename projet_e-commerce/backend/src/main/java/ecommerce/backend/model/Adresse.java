package ecommerce.backend.model;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Adresse {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(JsonViews.Common.class)
	private int id;
	@JsonView(JsonViews.Common.class)
	private int numero;
	@JsonView(JsonViews.Common.class)
	private String rue;
	@JsonView(JsonViews.Common.class)
	private String complement;
	@JsonView(JsonViews.Common.class)
	private String cp;
	@JsonView(JsonViews.Common.class)
	private String ville;
	@OneToMany(mappedBy = "adresse")
	@JsonView(JsonViews.AdresseWithClient.class)
	private Collection<Client> clients;
	@Version
	private int version;

	public Adresse() {
		super();
	}

	public Adresse(int id, int numero, String rue, String complement, String cp, String ville,
			Collection<Client> clients) {
		super();
		this.id = id;
		this.numero = numero;
		this.rue = rue;
		this.complement = complement;
		this.cp = cp;
		this.ville = ville;
		this.clients = clients;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getRue() {
		return rue;
	}

	public void setRue(String rue) {
		this.rue = rue;
	}

	public String getComplement() {
		return complement;
	}

	public void setComplement(String complement) {
		this.complement = complement;
	}

	public String getCp() {
		return cp;
	}

	public void setCp(String cp) {
		this.cp = cp;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public Collection<Client> getClients() {
		return clients;
	}

	public void setClients(Collection<Client> clients) {
		this.clients = clients;
	}

	@Override
	public String toString() {
		return "Adresse [id=" + id + ", numero=" + numero + ", rue=" + rue + ", complement=" + complement + ", cp=" + cp
				+ ", ville=" + ville + "]";
	}
}

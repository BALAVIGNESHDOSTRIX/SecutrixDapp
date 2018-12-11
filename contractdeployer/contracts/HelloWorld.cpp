#include <eosiolib/eosio.hpp>
using namespace eosio;
using std::string;
using namespace std;

class secutrixdos : public eosio::contract {
  public:
      using contract::contract;

      // @abi action 
      void uploader( const account_name owner,const string &certname,const string &description,const string &ipfshash) {
	require_auth(owner);
         print("uploader",";;",owner,";;",certname,";;",ipfshash,";;",description);
      }

     //@abi action
    void docregis(const account_name doc,const string &fullname,const string &kycipfs){
	require_auth(doc);
	print("docregis",";;",doc,";;",fullname,";;",kycipfs);
	}

   //@abi action
  void sechat(const account_name from,const account_name to,const string &message){
	require_auth(from);
	print("sechat",";;",from,";;",to,";;",message);
	}
};

EOSIO_ABI(secutrixdos,(uploader)(docregis)(sechat))

Search.setIndex({docnames:["advanced-use","basic-use","best-practices","debian","faq","fastentrypoints","index","install","iocage_cli","iocage_lib","jailtypes","known-issues","modules","networking","plugins","setup","templates","tests"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["advanced-use.rst","basic-use.rst","best-practices.rst","debian.rst","faq.rst","fastentrypoints.rst","index.rst","install.rst","iocage_cli.rst","iocage_lib.rst","jailtypes.rst","known-issues.rst","modules.rst","networking.rst","plugins.rst","setup.rst","templates.rst","tests.rst"],objects:{"":{iocage_cli:[8,0,0,"-"],iocage_lib:[9,0,0,"-"]},"iocage_cli.IOCLogger":{setConsoleLogLevel:[8,2,1,""]},"iocage_cli.IOCageCLI":{get_command:[8,2,1,""],list_commands:[8,2,1,""]},"iocage_cli.InfoHandler":{emit:[8,2,1,""]},"iocage_cli.clone":{validate_count:[8,3,1,""]},"iocage_cli.create":{validate_count:[8,3,1,""]},"iocage_cli.destroy":{child_test:[8,3,1,""]},"iocage_cli.fetch":{validate_count:[8,3,1,""]},"iocage_lib.ioc_check":{IOCCheck:[9,1,1,""]},"iocage_lib.ioc_clean":{IOCClean:[9,1,1,""]},"iocage_lib.ioc_clean.IOCClean":{clean_all:[9,2,1,""],clean_debug:[9,2,1,""],clean_images:[9,2,1,""],clean_jails:[9,2,1,""],clean_releases:[9,2,1,""],clean_templates:[9,2,1,""]},"iocage_lib.ioc_common":{callback:[9,3,1,""],check_release_newer:[9,3,1,""],check_truthy:[9,3,1,""],checkoutput:[9,3,1,""],construct_truthy:[9,3,1,""],consume_and_log:[9,3,1,""],copytree:[9,3,1,""],gen_nat_ip:[9,3,1,""],gen_unused_lo_ip:[9,3,1,""],generate_devfs_ruleset:[9,3,1,""],get_host_release:[9,3,1,""],get_jail_freebsd_version:[9,3,1,""],get_name_sortkey:[9,3,1,""],get_natural_sortkey:[9,3,1,""],get_nested_key:[9,3,1,""],get_size_sortkey:[9,3,1,""],get_used_ips:[9,3,1,""],ioc_sort:[9,3,1,""],is_tty:[9,3,1,""],logit:[9,3,1,""],lowercase_set:[9,3,1,""],match_to_dir:[9,3,1,""],open_atomic:[9,3,1,""],parse_latest_release:[9,3,1,""],raise_sort_error:[9,3,1,""],runscript:[9,3,1,""],set_rcconf:[9,3,1,""],sort_ava:[9,3,1,""],sort_boot:[9,3,1,""],sort_created:[9,3,1,""],sort_crt:[9,3,1,""],sort_ip6:[9,3,1,""],sort_ip:[9,3,1,""],sort_jid:[9,3,1,""],sort_key:[9,3,1,""],sort_name:[9,3,1,""],sort_qta:[9,3,1,""],sort_release:[9,3,1,""],sort_res:[9,3,1,""],sort_state:[9,3,1,""],sort_template:[9,3,1,""],sort_type:[9,3,1,""],sort_use:[9,3,1,""],tempfile:[9,3,1,""],try_convert:[9,3,1,""]},"iocage_lib.ioc_create":{IOCCreate:[9,1,1,""]},"iocage_lib.ioc_create.IOCCreate":{create_config:[9,2,1,""],create_install_packages:[9,2,1,""],create_jail:[9,2,1,""],create_rc:[9,2,1,""],create_thickjail:[9,2,1,""]},"iocage_lib.ioc_debug":{IOCDebug:[9,1,1,""]},"iocage_lib.ioc_debug.IOCDebug":{run_debug:[9,2,1,""],run_host_debug:[9,2,1,""],run_jail_debug:[9,2,1,""]},"iocage_lib.ioc_destroy":{IOCDestroy:[9,1,1,""]},"iocage_lib.ioc_destroy.IOCDestroy":{destroy_jail:[9,2,1,""]},"iocage_lib.ioc_exceptions":{CommandFailed:[9,4,1,""],CommandNeedsRoot:[9,4,1,""],ExceptionWithMsg:[9,4,1,""],Exists:[9,4,1,""],JailCorruptConfiguration:[9,4,1,""],JailMisconfigured:[9,4,1,""],JailMissingConfiguration:[9,4,1,""],JailRunning:[9,4,1,""],PoolNotActivated:[9,4,1,""],ValidationFailed:[9,4,1,""],ValueNotFound:[9,4,1,""],ignore_exceptions:[9,3,1,""]},"iocage_lib.ioc_exec":{IOCExec:[9,1,1,""],InteractiveExec:[9,1,1,""],SilentExec:[9,1,1,""]},"iocage_lib.ioc_exec.IOCExec":{exec_jail:[9,2,1,""],flight_checks:[9,2,1,""]},"iocage_lib.ioc_fetch":{IOCFetch:[9,1,1,""]},"iocage_lib.ioc_fetch.IOCFetch":{fetch_download:[9,2,1,""],fetch_extract:[9,2,1,""],fetch_http_release:[9,2,1,""],fetch_release:[9,2,1,""],fetch_update:[9,2,1,""],update_progress:[9,2,1,""]},"iocage_lib.ioc_fstab":{IOCFstab:[9,1,1,""]},"iocage_lib.ioc_fstab.IOCFstab":{fstab_list:[9,2,1,""]},"iocage_lib.ioc_image":{IOCImage:[9,1,1,""]},"iocage_lib.ioc_image.IOCImage":{export_jail:[9,2,1,""],import_jail:[9,2,1,""]},"iocage_lib.ioc_json":{IOCConfiguration:[9,1,1,""],IOCCpuset:[9,1,1,""],IOCJson:[9,1,1,""],IOCRCTL:[9,1,1,""],IOCSnapshot:[9,1,1,""],IOCZFS:[9,1,1,""],JailRuntimeConfiguration:[9,1,1,""],Release:[9,1,1,""],Resource:[9,1,1,""]},"iocage_lib.ioc_json.IOCConfiguration":{check_config:[9,2,1,""],check_default_config:[9,2,1,""],check_jail_config:[9,2,1,""],fix_properties:[9,2,1,""],get_mac_prefix:[9,5,1,""],get_pool_and_iocroot:[9,2,1,""],get_version:[9,5,1,""],json_write:[9,2,1,""]},"iocage_lib.ioc_json.IOCCpuset":{retrieve_cpu_sets:[9,5,1,""],set_cpuset:[9,2,1,""],validate_cpuset_prop:[9,5,1,""]},"iocage_lib.ioc_json.IOCJson":{activate_pool:[9,2,1,""],get_full_config:[9,2,1,""],json_check_prop:[9,2,1,""],json_convert_from_ucl:[9,2,1,""],json_convert_from_zfs:[9,2,1,""],json_get_value:[9,2,1,""],json_load:[9,2,1,""],json_migrate_uuid_to_tag:[9,2,1,""],json_plugin_get_value:[9,2,1,""],json_plugin_load:[9,2,1,""],json_plugin_set_value:[9,2,1,""],json_set_value:[9,2,1,""]},"iocage_lib.ioc_json.IOCRCTL":{rctl_rules_exist:[9,2,1,""],remove_rctl_rules:[9,2,1,""],set_rctl_rules:[9,2,1,""],types:[9,6,1,""],validate_rctl_props:[9,5,1,""],validate_rctl_tunable:[9,5,1,""]},"iocage_lib.ioc_json.IOCSnapshot":{"delete":[9,2,1,""],exists:[9,6,1,""],normalize_data:[9,2,1,""],raw_data:[9,6,1,""]},"iocage_lib.ioc_json.IOCZFS":{iocroot_datasets:[9,6,1,""],iocroot_path:[9,6,1,""],pools:[9,6,1,""],release_snapshots:[9,6,1,""],zfs_destroy_dataset:[9,2,1,""],zfs_get_dataset_and_dependents:[9,2,1,""],zfs_get_dataset_name:[9,2,1,""],zfs_get_property:[9,2,1,""],zfs_get_snapshot:[9,2,1,""],zfs_set_property:[9,2,1,""]},"iocage_lib.ioc_json.JailRuntimeConfiguration":{normalize_data:[9,2,1,""],path:[9,6,1,""],remove:[9,2,1,""],set:[9,2,1,""],sync_changes:[9,2,1,""]},"iocage_lib.ioc_json.Release":{path:[9,6,1,""]},"iocage_lib.ioc_json.Resource":{exists:[9,6,1,""],path:[9,6,1,""]},"iocage_lib.ioc_list":{IOCList:[9,1,1,""]},"iocage_lib.ioc_list.IOCList":{list_all:[9,2,1,""],list_all_quick:[9,2,1,""],list_bases:[9,2,1,""],list_datasets:[9,2,1,""],list_get_jid:[9,7,1,""]},"iocage_lib.ioc_plugin":{IOCPlugin:[9,1,1,""]},"iocage_lib.ioc_plugin.IOCPlugin":{fetch_plugin:[9,2,1,""],fetch_plugin_index:[9,2,1,""],update:[9,2,1,""],upgrade:[9,2,1,""]},"iocage_lib.ioc_start":{IOCStart:[9,1,1,""]},"iocage_lib.ioc_start.IOCStart":{check_aliases:[9,2,1,""],find_bridge_mtu:[9,2,1,""],get_bridge_members:[9,2,1,""],get_default_gateway:[9,2,1,""],start_copy_localtime:[9,2,1,""],start_generate_resolv:[9,2,1,""],start_network:[9,2,1,""],start_network_interface_vnet:[9,2,1,""],start_network_vnet_addr:[9,2,1,""],start_network_vnet_iface:[9,2,1,""]},"iocage_lib.ioc_stop":{IOCStop:[9,1,1,""]},"iocage_lib.ioc_upgrade":{IOCUpgrade:[9,1,1,""]},"iocage_lib.ioc_upgrade.IOCUpgrade":{upgrade_basejail:[9,2,1,""],upgrade_jail:[9,2,1,""]},"iocage_lib.iocage":{IOCage:[9,1,1,""],PoolAndDataset:[9,1,1,""]},"iocage_lib.iocage.IOCage":{"export":[9,2,1,""],activate:[9,2,1,""],chroot:[9,2,1,""],clean:[9,2,1,""],create:[9,2,1,""],debug:[9,2,1,""],destroy_jail:[9,2,1,""],destroy_release:[9,2,1,""],df:[9,2,1,""],exec:[9,2,1,""],fetch:[9,2,1,""],fstab:[9,2,1,""],get:[9,2,1,""],import_:[9,2,1,""],list:[9,2,1,""],rename:[9,2,1,""],restart:[9,2,1,""],rollback:[9,2,1,""],set:[9,2,1,""],snap_list:[9,2,1,""],snap_remove:[9,2,1,""],snapshot:[9,2,1,""],start:[9,2,1,""],stop:[9,2,1,""],update:[9,2,1,""],update_all:[9,2,1,""],upgrade:[9,2,1,""],upgrade_all:[9,2,1,""]},"iocage_lib.iocage.PoolAndDataset":{get_datasets:[9,2,1,""],get_iocroot:[9,2,1,""],get_pool:[9,2,1,""]},iocage_cli:{"export":[8,0,0,"-"],"import":[8,0,0,"-"],IOCLogger:[8,1,1,""],IOCageCLI:[8,1,1,""],InfoHandler:[8,1,1,""],activate:[8,0,0,"-"],chroot:[8,0,0,"-"],clean:[8,0,0,"-"],clone:[8,0,0,"-"],console:[8,0,0,"-"],create:[8,0,0,"-"],debug:[8,0,0,"-"],destroy:[8,0,0,"-"],df:[8,0,0,"-"],exec:[8,0,0,"-"],fetch:[8,0,0,"-"],fstab:[8,0,0,"-"],get:[8,0,0,"-"],list:[8,0,0,"-"],migrate:[8,0,0,"-"],pkg:[8,0,0,"-"],print_version:[8,3,1,""],rename:[8,0,0,"-"],restart:[8,0,0,"-"],rollback:[8,0,0,"-"],set:[8,0,0,"-"],snaplist:[8,0,0,"-"],snapremove:[8,0,0,"-"],snapshot:[8,0,0,"-"],start:[8,0,0,"-"],stop:[8,0,0,"-"],update:[8,0,0,"-"],upgrade:[8,0,0,"-"]},iocage_lib:{ioc_check:[9,0,0,"-"],ioc_clean:[9,0,0,"-"],ioc_common:[9,0,0,"-"],ioc_create:[9,0,0,"-"],ioc_debug:[9,0,0,"-"],ioc_destroy:[9,0,0,"-"],ioc_exceptions:[9,0,0,"-"],ioc_exec:[9,0,0,"-"],ioc_fetch:[9,0,0,"-"],ioc_fstab:[9,0,0,"-"],ioc_image:[9,0,0,"-"],ioc_json:[9,0,0,"-"],ioc_list:[9,0,0,"-"],ioc_plugin:[9,0,0,"-"],ioc_start:[9,0,0,"-"],ioc_stop:[9,0,0,"-"],ioc_upgrade:[9,0,0,"-"],iocage:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"],"5":["py","staticmethod","Python static method"],"6":["py","attribute","Python attribute"],"7":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception","5":"py:staticmethod","6":"py:attribute","7":"py:classmethod"},terms:{"11e4":1,"26e8":1,"26e8e027":1,"3c970e80eb61":1,"64bit":3,"8f7f":1,"abstract":13,"boolean":9,"case":[1,9,11],"catch":9,"class":[8,9],"default":[0,1,2,4,6,7,9,13],"export":[1,6,7,9,12],"function":[0,1,9,11,14],"import":[6,9,12],"int":8,"long":[1,9,11],"new":[0,1,9,10,16],"return":[8,9],"short":[9,11],"static":9,"true":[1,9],"try":[2,9],"while":[0,9],AND:13,Adding:11,And:[6,10],For:[0,1,4,9,10,13],RES:9,The:[0,1,3,7,8,9,10,13,14,16],There:[1,2,7,11,13],These:[4,10,13],USE:9,USED:9,Use:[0,1,2,3,14,16],Using:[2,6,14],Will:[4,9],With:1,YES:[0,2],Yes:4,ZFS:[0,4,6,9,11],__destroy_parse_datasets__:9,__stop_jails__:9,_callback:9,_dict:9,_file:9,_fstab_list:9,_import:9,_json:9,_list:9,_log:9,_pass:9,_sort:9,_type:8,_uuid:9,abl:1,about:[1,2,9,11,13],abov:[0,1,7,13],accept:[1,9],accept_licens:9,accept_rtadv:9,access:[1,9],accident:2,act:7,action:9,activ:[0,6,9,12,14],activate_pool:9,actual:[8,9],adapt:13,add:[0,3,9,11,13,16],add_path:9,added:0,adding:[1,7,11],addition:14,addm:13,address:[4,9,11,13],adjust:[1,14],admin:7,administr:4,advanc:[1,6],affect:[0,11],after:[0,1,10,13,14],alia:[9,13],all:[0,7,9,10,14,16],alloc:9,allow:[1,2,4,9,11],almost:[0,3],alon:2,along:13,alreadi:[1,9,14],also:[0,1,2,9,13,14],alter:1,altern:[1,11],altq_cbq:11,altq_cdnr:11,altq_hfsc:11,altq_priq:11,altq_r:11,altq_rio:11,alwai:[1,2],amount:10,ani:[0,1,7,8,9,16],anonym:9,anoth:[1,7,13,16],anyth:[3,9],appear:[0,8],append:[3,7],appli:1,applic:14,appropri:[9,10],aren:9,arg:9,argument:9,around:11,ask:9,assign:[0,1,4,9,11,13],assumpt:7,atom:9,attach:[3,4,9],attr:8,attribut:9,auth:9,auto:6,automat:[1,6],ava:9,avail:[0,1,11,13,14,16],avoid:2,back:[7,9,13,16],background:9,backup:0,bad:9,bar:[0,9],base:[0,1,6,8,9,10,13,16],basejail:[0,1,6,7,9],bash:1,basic:6,baz:0,becaus:[7,9],becom:[0,4],been:2,befor:[0,1,7,9,14],begin:[1,2],behav:13,being:1,benefit:10,berklei:13,best:[1,6,7,9],better:13,between:[10,11,13,16],bin:7,binari:6,bind:6,block:2,boilerpl:9,bool:9,boot:[1,6,9,11],both:[2,4,11,13],box:0,branch:9,bridg:[4,9,13],bridge0:13,bug:2,build:6,built:[4,13],bump:9,call:[9,13],callabl:9,callback:9,callback_except:9,caller:9,can:[0,1,3,4,7,9,10,11,13,14,16],cannot:[9,13,16],cap:0,cat:7,caus:[11,13],cgi:3,chain:8,challeng:11,chang:[0,1,2,7,9,10,14,16],chapter:4,charact:[1,11],cheap:0,check:[2,4,9,13,14],check_alias:9,check_config:9,check_default_config:9,check_jail_config:9,check_output:9,check_release_new:9,check_truthi:9,checking_dataset:9,checkoutput:9,child_test:8,children:[8,9],choos:[1,9],chroot:[9,12],chunk_siz:9,classmethod:9,clean:[7,9,12],clean_al:9,clean_debug:9,clean_imag:9,clean_jail:9,clean_releas:9,clean_templ:9,cli:[1,8,9,11],click:8,clone:[1,4,6,7,9,12,13],clone_basejail:9,cloned_interfac:13,coexist:9,collect:9,color:1,column:1,com:[7,9],combin:6,comma:[8,9],command:[0,1,2,6,7,8,9,11,14],commandfail:9,commandneedsroot:9,common:9,commun:13,compil:[2,11],complet:14,complex:1,compon:13,comput:13,concept:10,conf:[0,2,9,11,13],config:9,config_vers:9,configur:[4,6,9,14,16],confirm:0,conflict:7,conftest:12,connect:[0,13,16],consid:[9,13],consist:14,consol:[3,9,12,13],constantli:2,construct_truthi:9,consum:[9,10],consume_and_log:9,consumpt:4,contain:[0,4,6,7,9,13,14],content:[12,16],context:[8,9],control:[2,13],conveni:9,convert:[9,10,16],copi:[0,4,9,10],copytre:9,core:[4,8,14],coredumps:9,correct:9,count:9,cpu:4,cpuset:0,cputim:9,crash:[11,13],creat:[2,4,6,9,10,12,13,14,16],create_config:9,create_install_packag:9,create_jail:9,create_rc:9,create_thickjail:9,creation:[0,1,2,9,10,11],crt:9,csh:1,ctx:8,current:[0,1,7,9,11,14],custom:[1,2,3,4,10,16],customiz:14,cycl:9,cython3:7,d_type:9,dad:11,dad_count:11,dai:11,data:[0,2,9,10],data_class:12,datas:9,dataset:[6,9],debian:6,debjail:3,debootstrap:3,debug:[9,12],decad:13,decod:9,dedic:6,defaultgw:9,defaultrout:13,defaultrouter6:13,defin:11,definit:[8,9],defualt:1,delet:[2,7,9],delimit:[0,9],demot:0,deni:[0,9],depend:[1,8],deploy:16,deprec:9,depth:13,describ:10,descript:1,design:[1,4],desir:[1,13],dest:9,destin:9,destroi:[0,6,9,11,12],destroy_jail:9,destroy_releas:9,detail:[1,4,13],detect:11,develop:[13,14],devf:9,devfs_ruleset:9,dhcp:[9,13,14],dictionari:9,differ:[1,10,16],dir:[1,9],direct:13,directli:[2,3,13],directori:[1,7,8,9],disabl:[11,13],discov:2,disk:9,displai:[1,4,9],display_text:9,dive:11,document:[1,4,13],doe:[11,13],doesn:[7,9],doing:1,done:[0,1,16],dot:9,doubl:0,down:[1,7],download:[1,9],drawback:10,dst:9,dump:9,duplic:[10,11],dure:0,each:[1,10],eas:[6,7],easi:6,easili:[2,7,14,16],edit:[3,7],effort:9,either:1,elaps:9,em0:[7,13,14],emit:8,empti:[3,6,7,9],enabl:[0,1,4,11,13],enough:[1,11],enter:[1,9],entri:[1,7,9],environ:[6,10],eol:[1,9],equal:9,equival:9,error:9,especi:2,essenti:[0,1,4,16],etc:[0,2,3,7,9,11,13],even:9,everi:9,everyth:[9,13],exactli:14,exampl:[0,1,2,3,10,11,13,14],examplejail1:13,examplejail:[0,10,11,13],except:9,exceptionwithmsg:9,exclud:2,exec:[9,12,13],exec_:9,exec_gen:9,exec_jail:9,exec_start:3,exec_stop:3,execut:[0,7,9,11],exist:[0,1,7,8,9,16],exit:[1,8,9],expect:[0,9],experiment:[1,10,13],export_jail:9,extend:14,ezjail:[6,10],f00c:1,fail:11,failur:6,fals:[1,8,9],faq:6,fast:14,fastentrypoint:12,featur:[6,7],feb:7,fetch:[6,9,12,14],fetch_download:9,fetch_extract:9,fetch_http_releas:9,fetch_plugin:9,fetch_plugin_index:9,fetch_releas:9,fetch_upd:9,few:13,file:[0,1,3,7,9,11,14],filenam:9,filepath:9,filesystem:[0,7,9],filter:13,find:[9,13,16],find_bridge_mtu:9,fine:[1,2,7],finish:[0,2,16],firewal:[2,4],firewall_en:2,firewall_typ:2,first:[0,1,9],fix:9,fix_properti:9,flag:[0,1,11,14],flight_check:9,flow:1,fly:0,follow:[3,9,13],foo:[0,9],foo_bar:9,forc:[8,9,13],forget:9,format:9,forward:13,found:[1,7,9,10,14],four:1,free:9,freebsd:[0,1,3,4,7,9,11,13],freena:14,from:[0,1,2,6,9,10,11,16],fsdump:9,fsoption:9,fspass:9,fstab:[3,9,10,12],fstab_list:9,fstype:9,fsync:9,ftp:1,full:[1,9,14],fulli:[0,4,10,13],further:10,gatewai:[4,9,13],gather:9,gear:[6,7],gen_nat_ip:9,gen_unused_lo_ip:9,gener:[2,4,9,13],generate_devfs_ruleset:9,get:[2,3,9,12,13,14],get_bridge_memb:9,get_command:8,get_dataset:9,get_default_gatewai:9,get_full_config:9,get_host_releas:9,get_iocroot:9,get_jail_freebsd_vers:9,get_mac_prefix:9,get_name_sortkei:9,get_natural_sortkei:9,get_nested_kei:9,get_pool:9,get_pool_and_iocroot:9,get_size_sortkei:9,get_used_ip:9,get_vers:9,git:7,github:[6,14],give:2,given:[0,1,8,9],gnu:6,goe:7,good:9,grab:3,greater:9,grep:7,guid:1,guidelin:2,handl:[0,13],handler:8,happen:11,harden:9,hardwar:13,has:[1,2,6,9,10,11,13,16],have:[0,1,9,10,13],hdr:9,header:9,heavi:13,hello:14,help:[1,2],helper:9,here:[0,1],high:14,higher:0,histor:11,hit:9,host:[0,2,3,4,6,7,9,10,13],host_hostnam:9,host_us:9,hostnam:[1,9],how:[1,4],howev:[4,7],http:[3,7,9],icon:[9,14],ideal:10,ident:9,identifi:[1,2,9],ifac:9,ifconfig:[9,13],ifconfig_bridge0:13,ifconfig_em0:13,igb0:14,ignor:9,ignore_except:9,imag:9,immedi:[1,10],implement:[0,8],impli:13,import_:9,import_jail:9,includ:9,independ:[4,10,16],index:[6,9],individu:14,inet6:11,inet:13,info:[4,7],infohandl:8,inform:[1,7,11,13],infrequ:2,init:3,initi:[0,1,14],input:9,insid:[2,4,6,9,13],instal:[3,6,9,14,16],instead:2,instruct:13,intend:[8,10],intent:3,interact:[1,9,11],interactiveexec:9,interest:11,interfac:[4,6,9,11],intern:9,internet:0,inus:9,invers:9,invok:1,invoke_without_command:8,ioc:8,ioc_check:12,ioc_clean:12,ioc_common:12,ioc_creat:12,ioc_debug:12,ioc_destroi:12,ioc_except:12,ioc_exec:12,ioc_fetch:12,ioc_fstab:12,ioc_imag:12,ioc_json:12,ioc_list:12,ioc_plugin:12,ioc_sort:9,ioc_start:12,ioc_stop:12,ioc_upgrad:12,iocag:[0,2,3,4,10,11,13,14,16],iocage_cli:12,iocage_color:1,iocage_en:0,iocage_forc:1,iocage_legaci:6,iocage_lib:12,iocage_logfil:1,iocage_plugin_ip:1,iocagecli:8,iocaget:1,ioccheck:9,iocclean:9,iocconfigur:9,ioccpuset:9,ioccreat:9,iocdebug:9,iocdestroi:9,iocexec:9,iocfetch:9,iocfstab:9,iocimag:9,iocjson:9,ioclist:9,ioclogg:8,iocplugin:9,iocrctl:9,iocroot:[8,9],iocroot_dataset:9,iocroot_path:9,iocsnapshot:9,iocstart:9,iocstop:9,iocupgrad:9,ioczf:9,ip4:9,ip4_add:4,ip4_addr:[7,13,14],ip6:11,ip6_addr:13,ip_addr:[1,9],ip_prefix:9,ipfw:[2,4,11],ipjail:4,ips:9,ipv4:13,ipv6:[6,9,13],irrevers:1,is_depend:9,is_tti:9,isn:[0,7],isol:[2,13],issu:[2,6,13],item:9,iter:[8,9],iterat:9,its:[0,14,16],jail1:1,jail:[2,4,9,11,14,16],jail_nam:9,jail_oldjail_ip:7,jail_path:9,jail_typ:9,jail_us:9,jail_uuid:9,jailcorruptconfigur:9,jailfromtempl:16,jailmisconfigur:9,jailmissingconfigur:9,jailrun:9,jailruntimeconfigur:9,jexec:9,jid:9,json:[0,9,14],json_check_prop:9,json_convert_from_ucl:9,json_convert_from_zf:9,json_get_valu:9,json_load:9,json_migrate_uuid_to_tag:9,json_plugin_get_valu:9,json_plugin_load:9,json_plugin_set_valu:9,json_set_valu:9,json_writ:9,just:[9,16],keep:0,keep_jail_on_failur:9,kei:9,kernconf:11,kernel:[2,3,11,13],keyword:9,kfreebsd:6,kill:11,know:[13,16],known:[2,6,9,13],kwarg:9,larg:[9,10],last:9,latest:[0,1,9],learn:6,leav:[2,9,16],legaci:[4,6],length:11,less:[2,14],level:[0,8,9,14],lib32:9,lib:3,libgit2:7,libzf:9,life:9,lightweight:0,like:[1,9,11],limit:[4,6],line:[0,1,3,7,9,11,14],link:[1,7,13],linproc:3,linprocf:3,linsi:3,linsysf:3,linux:[3,10],list:[6,7,9,10,11,12,14,16],list_al:9,list_all_quick:9,list_bas:9,list_command:8,list_dataset:9,list_get_jid:9,list_head:9,list_long:9,lite:7,littl:10,load:[8,9],local:[7,14],localhost:9,locat:[1,7,9],lock:2,log:[1,8,9],logit:9,look:[7,9],lower:0,lowercase_set:9,lrwxr:7,lst_type:9,mac:13,machin:11,mai:[0,11],mail:11,main:[7,8],make:[0,4,7,9,16],man:[1,3],manag:[2,4,7],mani:6,manifest:[9,14],manipul:9,manner:14,manual:[0,1,4,13],mask:7,massag:9,match:9,match_to_dir:9,maxproc:9,meaning:2,meant:[0,1],meat:9,member:13,memori:[0,4],memorylock:9,memoryus:[0,9],menu:1,merg:7,messag:9,method:[0,7,9,14,16],migrat:[1,6,9,12],minim:9,mirror:1,miss:9,mistak:2,mix:[2,9],mode:[1,3,9],modifi:[14,16],modul:[2,6,12],more:[1,2,4,6,7,11,13],most:1,mount:[6,7,9,10],mountpoint:[3,7,9,11],move:9,msg_return:9,msgqqueu:9,msgqsize:9,mtu:9,multicommand:8,multipl:[1,4,9,10,13],must:[0,4,7,13],myjail:[1,13],mytempl:16,name:[0,1,2,3,4,8,9,11,13,14,16],nat:[4,9],nat_addr:9,need:[0,1,3,4,7,9,10,13,14,16],nest:9,net:[11,13],net_config:9,netmask:4,netstat:9,network:[4,6,7,9,10,16],new_nam:9,new_releas:9,newexamplejail:10,newjail:7,newli:[0,1],newtempl:16,next:13,nginx:[0,16],nic:9,nic_def:9,nmsgq:9,no_args_is_help:8,node:13,non:6,none:[8,9,13],nooption:13,normal:[1,6,14],normalize_data:9,note:[1,2,14,16],notimplementederror:8,now:[0,1,7],nsem:9,nsemop:9,nshm:9,nsswitch:9,nthr:9,nullf:[7,10],num:9,number:[1,13],numer:1,object:[8,9],obtain:0,obvious:9,occur:[9,13],off:13,offer:[6,14],offici:9,old:[2,9],old_uuid:9,oldjail:7,onc:[1,2,10,16],one:[0,1,7,9,14],onestart:7,onli:[2,3,4,6,9,10,11,13],onlin:0,open:[1,2,9,13,14],open_atom:9,openfil:9,oper:[1,4,6,7,10],option:[0,1,2,9,11,13],option_typ:9,order:[0,8,13],org:[1,3,9],origin:[9,10],other:[0,1,7,11],otherwis:[9,11],our:9,out:[0,4],outlin:0,output:[1,9],over:[11,13],overwrit:9,own:2,p10:11,packag:[6,12,16],packet:[11,13],page:[1,4,6,13],pair:9,param:8,paramet:9,parent:13,parse_latest_releas:9,part:7,partial:1,pass:[9,13],password:9,patch:[0,1,9,10],patchset:9,path:[0,6,7,9,14],pattern:9,pcpu:[0,9],per:[0,4,9,13],perfom:9,perform:2,perman:11,pfil:13,pfil_bridg:13,pfil_memb:13,pfil_onlyip:13,php:16,physic:13,ping:13,pip:7,pkg:[0,3,6,9,12],pkglist:[0,9],placehold:13,plan:4,pleas:4,plexmediaserv:14,plugin:[1,6,9],plumb:13,png:14,point:0,pool:[4,9],poolanddataset:9,poolnotactiv:9,popular:[10,14],port:6,possibl:7,post:11,potato:9,practic:6,pre:7,preciou:16,preconfigur:16,present:[9,11],preserv:[0,10],press:1,previous:[9,13],primari:1,print:8,print_vers:8,privat:9,probe:11,proc:3,procedur:0,process:[1,3,9,11,14,16],product:[3,11],program:[1,4,14],progress:9,prop:9,properli:[0,11],properti:[2,9,10,13,14,16],protocol:13,provid:[0,1,2,9,11],provis:[4,6],pseudotermin:9,pull:1,put:2,py36:7,python36:7,python:6,qta:9,quasselcor:14,queri:[1,3],queue:11,quick:9,quickli:[1,10],quit:1,racct:13,rais:8,raise_error:9,raise_sort_error:9,rapid:6,raw_data:9,rctl:13,rctl_rules_exist:9,re0:14,read:[1,9,11],readbp:9,readi:1,readiop:9,real:9,rebuild:13,receiv:10,recent:[1,11,13],recommend:[0,2,3,16],record:[0,8],recurs:[7,8,9],reduc:9,refer:[1,4],regener:13,relat:9,relationship:0,releas:[0,2,6,9,10,11,13,16],release_snapshot:9,reli:7,remain:[7,16],rememb:[1,3,7,16],remot:14,remov:[0,2,7,8,9,11],remove_rctl_rul:9,renam:[6,9,12],repeatedli:14,replac:[3,7,9,13],repo:9,repositori:[0,7],requir:[0,1,9,10,13,16],res:9,resolv:9,resourc:[4,6,9,13],respect:9,respons:9,rest:13,restart:[2,6,9,11,12],result:3,result_callback:8,retrieve_cpu_set:9,reus:9,revers:0,revert:0,right:[2,9],rlimit:0,rock:13,roll:9,rollback:[9,11,12],root:[2,3,7,9,14],root_dir:9,rout:[11,13],router:[4,9],rsize:9,rss:0,rsync:7,rule:[2,9],ruleset:9,run:[0,2,3,4,7,9,11,13,14],run_debug:9,run_host_debug:9,run_jail_debug:9,runscript:9,runtimeerror:9,s_type:9,safeti:0,same:[0,1,4,9,13,14],sanit:9,satisfi:10,save:[9,16],script:[1,9],sctp:13,search:6,second:[6,16],section:[1,2,3,4,10,11,13],securelevel:4,see:[1,2,9,14],seem:2,seen:1,select:1,self:9,send:10,separ:[9,13],serv:[10,13],server:[4,9],servic:[7,11],set:[0,2,3,4,6,9,10,11,12,13,14,16],set_cpuset:9,set_rcconf:9,set_rctl_rul:9,setconsoleloglevel:8,setenv:1,setup:[10,12],sever:10,share:[4,6],shell:[1,9],shmsize:9,shorten:11,should:[4,8],show:[1,3,9,13],shut:7,sigint:9,silent:9,silentexec:9,simpl:[1,7,14],simpli:0,simplifi:[2,4],simplist:6,sinc:16,singl:0,size:9,skip:9,skip_batch:9,skip_jail:9,slightli:1,small:[9,10],snap_id:9,snap_list:9,snap_remov:9,snaplist:[0,9,12],snapremov:[0,12],snapshot:[2,6,9,11,12],snapshotnam:0,soft:[2,9,11],softwar:11,solid:13,some:[2,4,6,7,11],someth:2,sometim:13,sort:9,sort_ava:9,sort_boot:9,sort_creat:9,sort_crt:9,sort_ip6:9,sort_ip:9,sort_jid:9,sort_kei:9,sort_list:9,sort_nam:9,sort_qta:9,sort_r:9,sort_releas:9,sort_row:9,sort_stat:9,sort_templ:9,sort_typ:9,sort_us:9,sourc:[0,4,7,9],source_templ:9,space:[0,10],specif:[1,3,10,11,13,14,16],specifi:[0,1,8,9,13],split:9,squeez:6,src:[7,9],src_base:7,stabl:11,stack:[2,4,6,9,13],stackoverflow:9,stacksiz:9,start:[0,2,3,6,9,11,12,13,14,16],start_copy_localtim:9,start_generate_resolv:9,start_jail:9,start_network:9,start_network_interface_vnet:9,start_network_vnet_addr:9,start_network_vnet_ifac:9,startup:10,state:[1,9],statu:[1,9,13],stderr:9,stdin_bytestr:9,stdout:9,step:13,still:4,stop:[0,2,6,7,9,11,12,16],stream:13,stress:2,string:[8,9],structur:14,su_env:9,subclass:8,subcommand:[1,8],subcommand_metavar:8,submodul:12,subnet:[7,9,13],subsect:0,subsequ:7,sudo:7,suffix:9,suppli:[0,1,9],support:[0,4,9,10,11,13,14],suppress_except:9,suppress_log:9,sure:[0,1,4,7,9,11,13],swapus:9,symlink:[7,9],sync_chang:9,synchron:[0,10],syntax:[1,6,7],sys:3,sysctl:[11,13],system:[0,1,4,6,7,9,11,13,14],sysutil:7,tabl:9,tag:[0,9],tailor:3,take:[0,8,9,11],tar:11,target:9,task:4,tcsh:1,technolog:[4,6,7],tell:[0,11],tempfil:9,templat:[1,2,4,6,9],temporari:9,term:4,test:[0,1,2,8,10,12,13,14],tester:2,testingjail:1,testjail:[0,2],testupd:0,text:9,than:9,thei:[0,8,9,10],them:[1,9],thi:[0,1,2,3,4,7,8,9,10,11,13,14,16],thick:16,thickconfig:9,thickjail:[6,9],thin:[4,6],those:0,through:1,time:[0,1,4,10,13,16],tip:2,tmpf:3,tmux:0,too:[4,11],tradition:13,traffic:4,transmiss:[10,13],transpar:[0,6,13],treat:4,tree:[7,9],trigger:2,truthi:9,try_convert:9,tty:9,tunabl:13,tune:1,tupl:9,turn:1,tutori:3,two:1,txz:9,type:[1,6,7,9,11,14],typic:13,ucl:9,uid:9,umount:9,unaffect:16,underscor:9,unexpect:[11,13],uniqu:[10,11],unit_test:9,unjail:9,unless:11,unmount:9,unnecessari:2,unsupport:10,updat:[2,6,9,12,14],update_al:9,update_progress:9,upgrad:[6,9,10,12,14],upgrade_al:9,upgrade_basejail:9,upgrade_jail:9,upon:9,upstream:9,uptim:11,usabl:1,usag:[6,9],use:[1,3,4,6,7,9,11,13,14],used:[0,1,2,7,10,11,13,14],useful:14,user:[0,1,2,4,9,10,11,13,14],userland:3,userland_vers:7,uses:1,using:[0,1,2,4,7,11,13],usr:7,utf:9,util:0,utlil:7,uuid:[0,1,3,4,9,11,14,16],valid:[9,14],validate_count:8,validate_cpuset_prop:9,validate_rctl_prop:9,validate_rctl_tun:9,validationfail:9,valu:[0,1,7,8,9],valuenotfound:9,variabl:6,variat:9,varieti:10,veri:14,verifi:[9,13],version:[0,4,7,8,9],via:7,view:[1,14],vimag:6,virtual:[4,6,13],visibl:13,visit:7,vlan:13,vmemoryus:9,vnet0:13,vnet0_mac:13,vnet:[2,4,6,9],wai:[0,4,13],wait:0,wallclock:9,well:[7,9,11],what:[4,9,14],whatev:8,wheel:7,wheezi:3,when:[0,1,2,7,11,13,14],where:[2,4,10,13],whether:[9,16],which:[0,1,2,13,14,16],wish:16,within:[6,7,16],without:[0,11,13],won:7,word:11,work:[2,4,7,11,13],workaround:11,world:14,would:7,wrapper:9,writabl:[0,4],write:9,writebp:9,writeiop:9,written:6,www01:[0,1],www02:[0,1],www03:0,www:[1,3],yes:[10,16],yet:0,you:[4,16],your:[3,4,7],zfs:[3,8,9,10,11],zfs_dataset:9,zfs_destroy_dataset:9,zfs_get_dataset_and_depend:9,zfs_get_dataset_nam:9,zfs_get_properti:9,zfs_get_snapshot:9,zfs_set_properti:9,zfsdataset:9,zone:4,zpool:[1,9]},titles:["Advanced Usage","Basic Usage","Best Practices","Create a Debian Squeeze Jail (GNU/kFreeBSD)","FAQ","fastentrypoints module","iocage - A FreeBSD Jail Manager","Install iocage","iocage_cli package","iocage_lib package","Jail Types","Known Issues","iocage","Networking","Plugins","setup module","Using Templates","tests package"],titleterms:{"default":10,"export":8,"import":8,"new":7,Using:[7,13,16],activ:[1,8],address:7,advanc:0,all:1,altq:11,appli:0,auto:0,automat:0,basejail:10,basic:1,best:2,binari:7,bind:11,boot:0,build:7,check:0,chroot:8,clean:8,clone:[0,8,10],config:7,configur:[1,13],conftest:17,consol:8,content:[8,9,17],copi:7,core:0,cpu:0,creat:[0,1,3,7,8],data:7,data_class:17,debian:3,debug:8,depend:0,destroi:[1,8],document:6,dram:0,empti:10,environ:1,exec:8,ezjail:7,failur:11,faq:4,fastentrypoint:5,fetch:[1,8],freebsd:6,from:7,fstab:[7,8],get:[1,8],github:7,gnu:3,host:11,indic:6,instal:[0,7],interfac:13,ioc_check:9,ioc_clean:9,ioc_common:9,ioc_creat:9,ioc_debug:9,ioc_destroi:9,ioc_except:9,ioc_exec:9,ioc_fetch:9,ioc_fstab:9,ioc_imag:9,ioc_json:9,ioc_list:9,ioc_plugin:9,ioc_start:9,ioc_stop:9,ioc_upgrad:9,iocag:[1,6,7,9,12],iocage_cli:8,iocage_legaci:7,iocage_lib:9,ipv6:11,issu:11,jail:[0,1,3,6,7,10,13],json:7,kfreebsd:3,known:11,legaci:0,limit:[0,11],list:[0,1,8],manag:[0,6],migrat:[7,8],modul:[5,8,9,15,17],mount:11,network:13,old:7,onli:0,option:7,packag:[0,7,8,9,17],path:11,pkg:[7,8],plugin:14,popul:7,port:7,practic:2,prioriti:0,promot:0,properti:[0,1],releas:[1,7],renam:[1,8],resourc:0,restart:[1,8],rollback:8,set:[1,8],setup:15,share:13,snaplist:8,snapremov:8,snapshot:[0,8],squeez:3,start:[1,7,8],stop:[1,8],submodul:[8,9,17],tabl:6,target:7,templat:[10,16],test:17,thickjail:10,thread:0,tip:13,turn:0,type:10,updat:[0,7,8],upgrad:[0,7,8],usag:[0,1],use:0,variabl:1,vimag:[11,13],vnet:[11,13]}})